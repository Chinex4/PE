import { test } from "node:test";
import assert from "node:assert/strict";
import { deliverEnquiry, validateEnquiry } from "../src/editorial/enquiry.js";
const settings = {
  serviceId: "test-service",
  templateId: "test-template",
  publicKey: "public-test-key",
};
const base = {
  user_name: " Test Visitor ",
  user_email: "visitor@example.com",
  message: "I would like to discuss my next steps.",
  enquiry_type: "Coaching",
};
for (const kind of ["contact", "branding", "speaking"]) {
  const values =
    kind === "speaking"
      ? {
          ...base,
          organisation: "Example",
          event_date: "2027-02-03",
          audience: "Students",
          topic: "Identity",
        }
      : base;
  test(`${kind}: valid enquiry maps payload and awaits delivery`, async () => {
    let payload;
    const result = await deliverEnquiry(
      values,
      kind,
      settings,
      async (...args) => {
        payload = args;
      },
    );
    assert.equal(result.sent, true);
    assert.equal(payload[2].reply_to, base.user_email);
    assert.equal(payload[2].name, "Test Visitor");
    assert.equal(payload[2].form_type, kind);
    if (kind === "speaking")
      assert.match(payload[2].message, /Event date: 2027-02-03/);
  });
  test(`${kind}: invalid, honeypot, unavailable and provider failure`, async () => {
    let calls = 0;
    const send = async () => {
      calls++;
    };
    await assert.rejects(
      () =>
        deliverEnquiry({ ...values, user_email: "bad" }, kind, settings, send),
      /valid email/,
    );
    assert.equal(calls, 0);
    assert.equal(
      (
        await deliverEnquiry(
          { ...values, website: "spam" },
          kind,
          settings,
          send,
        )
      ).spam,
      true,
    );
    assert.equal(calls, 0);
    await assert.rejects(
      () => deliverEnquiry(values, kind, {}, send),
      /unavailable/,
    );
    await assert.rejects(
      () =>
        deliverEnquiry(values, kind, settings, async () => {
          throw Error("private provider error");
        }),
      /could not be sent/,
    );
  });
}
test("reject whitespace and overlong input", () => {
  assert.ok(validateEnquiry({ ...base, user_name: "  " }, "contact"));
  assert.ok(validateEnquiry({ ...base, message: "x".repeat(5001) }, "contact"));
});
