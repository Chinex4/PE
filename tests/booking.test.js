import { test } from "node:test";
import assert from "node:assert/strict";
import { calLinkFrom } from "../src/site/booking.js";

test("reads the user and event from a Cal.com link", () => {
  assert.equal(
    calLinkFrom("https://cal.com/precious-evans-cch1ym/truecallswithpe"),
    "precious-evans-cch1ym/truecallswithpe",
  );
  assert.equal(
    calLinkFrom("https://www.cal.com/someone/intro/?layout=mobile"),
    "someone/intro",
  );
});

test("leaves every other link to open normally", () => {
  assert.equal(calLinkFrom("https://calendly.com/someone/intro"), "");
  assert.equal(calLinkFrom("https://cal.com/someone"), "");
  assert.equal(calLinkFrom("https://notcal.com/someone/intro"), "");
  assert.equal(calLinkFrom(""), "");
});
