export const TOPICS = [
  "Identity & personal development coaching",
  "Personal brand strategy & development",
  "I’m not sure yet",
];

export function validateEnquiry(values) {
  if (values.website) return "spam";
  if (
    typeof values.user_name !== "string" ||
    values.user_name.trim().length < 2 ||
    values.user_name.length > 200
  )
    return "Please enter your full name.";
  if (
    typeof values.user_email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.user_email) ||
    values.user_email.length > 200
  )
    return "Please enter a valid email address.";
  if (!TOPICS.includes(values.enquiry_type))
    return "Please choose what you’d like to focus on.";
  if (
    typeof values.message !== "string" ||
    values.message.trim().length < 10 ||
    values.message.length > 5000
  )
    return "Please add a little more detail to your message.";
  return "";
}

export async function deliverEnquiry(values, settings, send) {
  const error = validateEnquiry(values);
  if (error === "spam") return { sent: false, spam: true };
  if (error) throw new Error(error);
  if (!settings.serviceId || !settings.templateId || !settings.publicKey)
    throw new Error(
      "This form is currently unavailable. Please try again later.",
    );
  const clean = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value,
    ]),
  );
  try {
    await send(
      settings.serviceId,
      settings.templateId,
      {
        ...clean,
        name: clean.user_name,
        email: clean.user_email,
        reply_to: clean.user_email,
        form_type: "clarity-call",
        subject: `Clarity call request: ${clean.enquiry_type}`,
      },
      { publicKey: settings.publicKey, limitRate: { throttle: 10000 } },
    );
  } catch {
    throw new Error("Your message could not be sent. Please try again.");
  }
  return { sent: true, spam: false };
}
