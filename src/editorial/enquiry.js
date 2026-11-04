export function validateEnquiry(values, kind) {
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
  const fields =
    kind === "speaking"
      ? ["organisation", "event_date", "audience", "topic"]
      : ["message"];
  for (const field of fields)
    if (
      typeof values[field] !== "string" ||
      !values[field].trim() ||
      values[field].length > (field === "message" ? 5000 : 200)
    )
      return "Please complete all required fields.";
  if (kind !== "speaking" && values.message.trim().length < 10)
    return "Please add a little more detail to your message.";
  if (
    kind === "contact" &&
    ![
      "Coaching",
      "Personal branding strategy",
      "Speaking",
      "Collaborations",
      "General enquiries",
    ].includes(values.enquiry_type)
  )
    return "Please select an enquiry topic.";
  if (kind === "speaking" && !/^\d{4}-\d{2}-\d{2}$/.test(values.event_date))
    return "Please enter the event date.";
  return "";
}
export async function deliverEnquiry(values, kind, settings, send) {
  const error = validateEnquiry(values, kind);
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
  const message =
    kind === "speaking"
      ? `Organisation: ${clean.organisation}\nEvent date: ${clean.event_date}\nAudience: ${clean.audience}\nTopic: ${clean.topic}`
      : clean.message;
  try {
    await send(
      settings.serviceId,
      settings.templateId,
      {
        ...clean,
        name: clean.user_name,
        email: clean.user_email,
        reply_to: clean.user_email,
        form_type: kind,
        subject: `${kind} enquiry`,
        message,
      },
      { publicKey: settings.publicKey, limitRate: { throttle: 10000 } },
    );
  } catch {
    throw new Error("Your message could not be sent. Please try again.");
  }
  return { sent: true, spam: false };
}
