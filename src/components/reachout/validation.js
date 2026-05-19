import * as yup from "yup";

export const reachOutSchema = yup.object({
  fullName: yup.string().trim().required("Enter your full name."),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address.")
    .required("Enter your email address."),
  phone: yup.string().trim().required("Enter your phone number."),
  brandHandle: yup.string().trim().required("Enter your brand handle."),
  profileType: yup.string().required("Choose the option that describes you."),
  onlineFootprint: yup
    .string()
    .trim()
    .required("Share links to your online footprint."),
  monthlyRevenue: yup.string().required("Choose your current revenue range."),
  urgentProblems: yup
    .array()
    .of(yup.string())
    .min(1, "Choose at least one urgent priority."),
  contentCreation: yup.string().required("Choose how you create content."),
  brandGoals: yup
    .array()
    .of(yup.string())
    .min(1, "Choose at least one personal brand goal."),
  investmentRange: yup.string().required("Choose an investment range."),
  doneForYouFit: yup.string().required("Choose the closest fit."),
  weeklyTime: yup.string().required("Choose your weekly time commitment."),
  startTimeline: yup.string().required("Choose your preferred start timeline."),
  extraNotes: yup.string().trim(),
  cancellationAcknowledgement: yup
    .boolean()
    .oneOf([true], "Confirm that you understand."),
  contactConsent: yup.boolean().oneOf([true], "Consent is required."),
});

export const stepFields = [
  ["fullName", "email", "phone", "brandHandle"],
  ["profileType", "onlineFootprint"],
  ["monthlyRevenue", "urgentProblems"],
  ["contentCreation", "brandGoals"],
  ["investmentRange", "doneForYouFit"],
  ["weeklyTime", "startTimeline"],
  ["extraNotes", "cancellationAcknowledgement", "contactConsent"],
];
