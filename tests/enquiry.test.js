import { test } from "node:test";
import assert from "node:assert/strict";
import { deliverEnquiry, validateEnquiry } from "../src/site/enquiry.js";

const settings = {
  serviceId: "test-service",
  templateId: "test-template",
  publicKey: "public-test-key",
};
const values = {
  user_name: " Test Visitor ",
  user_email: "visitor@example.com",
  user_phone: "+234 801 234 5678",
  enquiry_type: "Personal brand strategy & development",
};

test("valid enquiry maps payload and awaits delivery", async () => {
  let payload;
  const result = await deliverEnquiry(values, settings, async (...args) => {
    payload = args;
  });
  assert.equal(result.sent, true);
  assert.equal(payload[2].reply_to, values.user_email);
  assert.equal(payload[2].user_name, "Test Visitor");
  assert.equal(payload[2].from_name, "Test Visitor");
  assert.equal(payload[2].user_phone, values.user_phone);
  assert.equal(payload[2].type, values.enquiry_type);
});

test("invalid, honeypot, unavailable and provider failure", async () => {
  let calls = 0;
  const send = async () => {
    calls++;
  };
  await assert.rejects(
    () => deliverEnquiry({ ...values, user_email: "bad" }, settings, send),
    /valid email/,
  );
  assert.equal(calls, 0);
  const spam = await deliverEnquiry({ ...values, website: "x" }, settings, send);
  assert.equal(spam.spam, true);
  assert.equal(calls, 0);
  await assert.rejects(() => deliverEnquiry(values, {}, send), /unavailable/);
  await assert.rejects(
    () =>
      deliverEnquiry(values, settings, async () => {
        throw Error("private provider error");
      }),
    /could not be sent/,
  );
});

test("reject whitespace, overlong input and unknown topics", () => {
  assert.ok(validateEnquiry({ ...values, user_name: "  " }));
  assert.ok(validateEnquiry({ ...values, enquiry_type: "Other" }));
  assert.ok(validateEnquiry({ ...values, user_phone: "" }));
  assert.ok(validateEnquiry({ ...values, user_phone: "12345" }));
  assert.ok(validateEnquiry({ ...values, user_phone: "call me" }));
  assert.equal(validateEnquiry(values), "");
});
