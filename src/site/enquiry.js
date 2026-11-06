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
  if (
    typeof values.user_phone !== "string" ||
    !/^\+?[\d\s()-]{7,24}$/.test(values.user_phone.trim()) ||
    values.user_phone.replace(/\D/g, "").length < 7
  )
    return "Please enter a valid phone number, with your country code.";
  if (!TOPICS.includes(values.enquiry_type))
    return "Please choose what you’d like to focus on.";
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
  const name = values.user_name.trim();
  const email = values.user_email.trim();
  try {
    await send(
      settings.serviceId,
      settings.templateId,
      {
        to_name: "Precious",
        from_name: name,
        user_name: name,
        user_email: email,
        user_phone: values.user_phone.trim(),
        type: values.enquiry_type,
        reply_to: email,
      },
      { publicKey: settings.publicKey, limitRate: { throttle: 10000 } },
    );
  } catch {
    throw new Error("Your message could not be sent. Please try again.");
  }
  return { sent: true, spam: false };
}
