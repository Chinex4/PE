import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import ChoiceGroup from "./ChoiceGroup";
import FormStepWrapper from "./FormStepWrapper";
import StepNavigation from "./StepNavigation";
import {
  brandGoalOptions,
  contentCreationOptions,
  defaultReachOutValues,
  doneForYouOptions,
  investmentOptions,
  profileTypeOptions,
  revenueOptions,
  startTimelineOptions,
  urgentProblemOptions,
  weeklyTimeOptions,
} from "./formOptions";
import { reachOutSchema, stepFields } from "./validation";

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  adminTemplateId: import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
  userTemplateId: import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const darkFieldSx = {
  "& .MuiInputBase-root": {
    bgcolor: "#1C1C1C",
    color: "#F5E9DC",
    borderRadius: "10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255,255,255,0.1)",
  },
  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(244,162,97,0.7)",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#F4A261",
  },
  "& .MuiInputLabel-root": {
    color: "rgba(245,233,220,0.64)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#F4A261",
  },
  "& .MuiFormHelperText-root": {
    ml: 0,
  },
  "& input::placeholder, & textarea::placeholder": {
    color: "rgba(245,233,220,0.45)",
    opacity: 1,
  },
};

const checkboxSx = {
  color: "rgba(245,233,220,0.45)",
  "&.Mui-checked": { color: "#F4A261" },
};

const formTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#F4A261" },
    error: { main: "#ff8a80" },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

const joinList = (value) =>
  Array.isArray(value) && value.length > 0 ? value.join(", ") : "";

const getFirstName = (fullName) => fullName.trim().split(/\s+/)[0] || fullName;

const bookingLink = "https://calendar.app.google/FqmihKDGYk4yd9Ps7";

const buildEmailParams = (values) => {
  const submittedAt = new Date().toLocaleString();

  return {
    subject: "New Personal Brand Application",
    user_subject: "We received your application",
    booking_link: bookingLink,
    full_name: values.fullName,
    first_name: getFirstName(values.fullName),
    user_name: values.fullName,
    email: values.email,
    user_email: values.email,
    to_email: values.email,
    phone: values.phone,
    user_phone: values.phone,
    brand_handle: values.brandHandle,
    profile_type: values.profileType,
    online_footprint: values.onlineFootprint,
    monthly_revenue: values.monthlyRevenue,
    urgent_problems: joinList(values.urgentProblems),
    content_creation: values.contentCreation,
    brand_goals: joinList(values.brandGoals),
    investment_range: values.investmentRange,
    done_for_you_fit: values.doneForYouFit,
    weekly_time: values.weeklyTime,
    start_timeline: values.startTimeline,
    extra_notes: values.extraNotes || "Not provided",
    cancellation_acknowledgement: values.cancellationAcknowledgement
      ? "Yes"
      : "No",
    contact_consent: values.contactConsent ? "Yes" : "No",
    submitted_at: submittedAt,
    message: [
      `Full name: ${values.fullName}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Brand handle: ${values.brandHandle}`,
      `Best describes them: ${values.profileType}`,
      `Online footprint: ${values.onlineFootprint}`,
      `Current monthly revenue: ${values.monthlyRevenue}`,
      `Most urgent problem: ${joinList(values.urgentProblems)}`,
      `Content creation: ${values.contentCreation}`,
      `Personal brand goals: ${joinList(values.brandGoals)}`,
      `Monthly investment range: ${values.investmentRange}`,
      `Done-for-you answer: ${values.doneForYouFit}`,
      `Weekly time commitment: ${values.weeklyTime}`,
      `Start timeline: ${values.startTimeline}`,
      `Extra notes: ${values.extraNotes || "Not provided"}`,
      `Cancellation acknowledgement: ${
        values.cancellationAcknowledgement ? "Yes" : "No"
      }`,
      `Submitted date/time: ${submittedAt}`,
    ].join("\n"),
  };
};

const steps = [
  {
    kicker: "Step 1",
    title: "Contact Information",
    description: "Start with the details I need to identify and contact you.",
    content: ({ register, errors }) => (
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Full Name"
          placeholder="Your full name"
          {...register("fullName")}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName?.message}
          sx={darkFieldSx}
          fullWidth
        />
        <TextField
          label="Email Address"
          placeholder="you@example.com"
          type="email"
          {...register("email")}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          sx={darkFieldSx}
          fullWidth
        />
        <TextField
          label="Phone Number"
          placeholder="+1 555 123 4567"
          type="tel"
          {...register("phone")}
          error={Boolean(errors.phone)}
          helperText={errors.phone?.message}
          sx={darkFieldSx}
          fullWidth
        />
        <TextField
          label="Brand Handle"
          placeholder="@yourbrand or Instagram/TikTok handle"
          {...register("brandHandle")}
          error={Boolean(errors.brandHandle)}
          helperText={errors.brandHandle?.message}
          sx={darkFieldSx}
          fullWidth
        />
      </div>
    ),
  },
  {
    kicker: "Step 2",
    title: "Basic Profile",
    description: "Tell me what kind of operator you are and where your brand lives online.",
    content: ({ control, register, errors }) => (
      <div className="space-y-6">
        <div>
          <p className="mb-3 text-sm font-semibold text-[#F5E9DC]">
            What best describes you?
          </p>
          <ChoiceGroup
            control={control}
            name="profileType"
            options={profileTypeOptions}
          />
        </div>
        <TextField
          label="Links to your online footprint"
          placeholder="Website, Instagram, Facebook, LinkedIn, TikTok, etc."
          {...register("onlineFootprint")}
          error={Boolean(errors.onlineFootprint)}
          helperText={errors.onlineFootprint?.message}
          sx={darkFieldSx}
          minRows={4}
          multiline
          fullWidth
        />
      </div>
    ),
  },
  {
    kicker: "Step 3",
    title: "Business Status",
    description: "This helps me understand where the brand work needs to meet the business.",
    content: ({ control }) => (
      <div className="space-y-6">
        <div>
          <p className="mb-3 text-sm font-semibold text-[#F5E9DC]">
            What&apos;s your current monthly business revenue?
          </p>
          <ChoiceGroup
            control={control}
            name="monthlyRevenue"
            options={revenueOptions}
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-[#F5E9DC]">
            What feels MOST urgent for you right now?
          </p>
          <ChoiceGroup
            control={control}
            name="urgentProblems"
            options={urgentProblemOptions}
            multiple
          />
        </div>
      </div>
    ),
  },
  {
    kicker: "Step 4",
    title: "Content and Brand Goals",
    description: "Clarify how content is getting made now and what the brand should unlock.",
    content: ({ control }) => (
      <div className="space-y-6">
        <div>
          <p className="mb-3 text-sm font-semibold text-[#F5E9DC]">
            How do you currently create content?
          </p>
          <ChoiceGroup
            control={control}
            name="contentCreation"
            options={contentCreationOptions}
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-[#F5E9DC]">
            What&apos;s your goal for building a personal brand?
          </p>
          <ChoiceGroup
            control={control}
            name="brandGoals"
            options={brandGoalOptions}
            multiple
          />
        </div>
      </div>
    ),
  },
  {
    kicker: "Step 5",
    title: "Investment and Solution Fit",
    description: "Make sure expectations match the level of support you want.",
    content: ({ control }) => (
      <div className="space-y-6">
        <div>
          <p className="mb-3 text-sm font-semibold text-[#F5E9DC]">
            If you&apos;re guaranteed to reach your goals, what would you be
            willing to invest each month?
          </p>
          <ChoiceGroup
            control={control}
            name="investmentRange"
            options={investmentOptions}
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-[#F5E9DC]">
            Are you looking for a done-for-you personal branding solution where
            our team handles strategy, scripting, creative direction, filming
            support, editing, posting, and optimization for you?
          </p>
          <ChoiceGroup
            control={control}
            name="doneForYouFit"
            options={doneForYouOptions}
            columns={1}
          />
        </div>
      </div>
    ),
  },
  {
    kicker: "Step 6",
    title: "Time and Start Readiness",
    description: "A strong personal brand needs realistic commitment and timing.",
    content: ({ control }) => (
      <div className="space-y-6">
        <div>
          <p className="mb-3 text-sm font-semibold text-[#F5E9DC]">
            How much time per week can you realistically commit to creating
            content?
          </p>
          <ChoiceGroup
            control={control}
            name="weeklyTime"
            options={weeklyTimeOptions}
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-[#F5E9DC]">
            If you&apos;re a good fit to work together on your personal brand,
            how soon would you want to start?
          </p>
          <ChoiceGroup
            control={control}
            name="startTimeline"
            options={startTimelineOptions}
          />
        </div>
      </div>
    ),
  },
  {
    kicker: "Step 7",
    title: "Final Notes and Consent",
    description: "Add anything important and confirm how we should handle your application.",
    content: ({ control, register, errors }) => (
      <div className="space-y-5">
        <TextField
          label="Is there anything else you'd like me to know before our call?"
          placeholder="Tell me anything important about your brand, goals, struggles, current situation, or expectations."
          {...register("extraNotes")}
          error={Boolean(errors.extraNotes)}
          helperText={errors.extraNotes?.message}
          sx={darkFieldSx}
          minRows={5}
          multiline
          fullWidth
        />

        <div className="rounded-lg border border-white/10 bg-[#1C1C1C] px-4 py-3">
          <Controller
            control={control}
            name="cancellationAcknowledgement"
            render={({ field, fieldState }) => (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={field.value}
                      onChange={(event) => field.onChange(event.target.checked)}
                      sx={checkboxSx}
                    />
                  }
                  label="If we don't think we can help you based on your answers, your call may be cancelled. Do you understand?"
                  sx={{
                    alignItems: "flex-start",
                    color: "#F5E9DC",
                    m: 0,
                    "& .MuiFormControlLabel-label": {
                      pt: "9px",
                      fontSize: "0.9rem",
                      lineHeight: 1.55,
                    },
                  }}
                />
                {fieldState.error ? (
                  <p className="mt-1 text-xs text-[#ff8a80]">
                    {fieldState.error.message}
                  </p>
                ) : null}
              </>
            )}
          />
        </div>

        <div className="rounded-lg border border-white/10 bg-[#1C1C1C] px-4 py-3">
          <Controller
            control={control}
            name="contactConsent"
            render={({ field, fieldState }) => (
              <>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={field.value}
                      onChange={(event) => field.onChange(event.target.checked)}
                      sx={checkboxSx}
                    />
                  }
                  label="By submitting this form, you agree that we may contact you about your enquiry."
                  sx={{
                    alignItems: "flex-start",
                    color: "#F5E9DC",
                    m: 0,
                    "& .MuiFormControlLabel-label": {
                      pt: "9px",
                      fontSize: "0.9rem",
                      lineHeight: 1.55,
                    },
                  }}
                />
                {fieldState.error ? (
                  <p className="mt-1 text-xs text-[#ff8a80]">
                    {fieldState.error.message}
                  </p>
                ) : null}
              </>
            )}
          />
        </div>
      </div>
    ),
  },
];

const MultiStepReachOutForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const {
    control,
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(reachOutSchema),
    defaultValues: defaultReachOutValues,
    mode: "onTouched",
  });

  const progressValue = useMemo(
    () => ((activeStep + 1) / steps.length) * 100,
    [activeStep]
  );

  const currentStep = steps[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = async () => {
    const isValid = await trigger(stepFields[activeStep], {
      shouldFocus: true,
    });

    if (isValid) {
      setActiveStep((step) => Math.min(step + 1, steps.length - 1));
      setSubmitError("");
    }
  };

  const handlePrevious = () => {
    setActiveStep((step) => Math.max(step - 1, 0));
    setSubmitError("");
  };

  const onSubmit = async (values) => {
    if (submitStatus === "success") {
      return;
    }

    setSubmitStatus("sending");
    setSubmitError("");

    try {
      const { serviceId, adminTemplateId, userTemplateId, publicKey } =
        emailJsConfig;

      if (!serviceId || !adminTemplateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured.");
      }

      const templateParams = buildEmailParams(values);
      const sendOptions = { publicKey };
      const emailRequests = [
        emailjs.send(serviceId, adminTemplateId, templateParams, sendOptions),
      ];

      if (userTemplateId) {
        emailRequests.push(
          emailjs.send(serviceId, userTemplateId, templateParams, sendOptions)
        );
      }

      await Promise.all(emailRequests);

      setSubmitStatus("success");
      reset(defaultReachOutValues);
      setActiveStep(0);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setSubmitError(
        "Something went wrong while sending your application. Please try again."
      );
    }
  };

  return (
    <ThemeProvider theme={formTheme}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121212]/90 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="border-b border-white/10 px-5 py-4 sm:px-7">
          <div className="mb-3 flex items-center justify-between gap-4 text-sm">
            <span className="font-semibold text-[#F5E9DC]">
              Step {activeStep + 1} of {steps.length}
            </span>
            <span className="text-neutral-400">
              {Math.round(progressValue)}% complete
            </span>
          </div>
          <LinearProgress
            variant="determinate"
            value={progressValue}
            sx={{
              height: 7,
              borderRadius: 999,
              bgcolor: "rgba(255,255,255,0.08)",
              "& .MuiLinearProgress-bar": {
                borderRadius: 999,
                bgcolor: "#F4A261",
              },
            }}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="px-5 py-6 sm:px-7 sm:py-8">
            {submitStatus === "success" ? (
              <Alert
                severity="success"
                sx={{
                  bgcolor: "rgba(46,125,50,0.16)",
                  color: "#D7F5DD",
                  border: "1px solid rgba(129,199,132,0.35)",
                  "& .MuiAlert-icon": { color: "#81c784" },
                }}
              >
                Thank you. Your application has been received. I&apos;ll reach
                out to you shortly.
              </Alert>
            ) : null}

            {submitError ? (
              <Alert
                severity="error"
                sx={{
                  mb: 3,
                  bgcolor: "rgba(211,47,47,0.14)",
                  color: "#ffd9d5",
                  border: "1px solid rgba(255,138,128,0.32)",
                  "& .MuiAlert-icon": { color: "#ff8a80" },
                }}
              >
                {submitError}
              </Alert>
            ) : null}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <FormStepWrapper
                  kicker={currentStep.kicker}
                  title={currentStep.title}
                  description={currentStep.description}
                >
                  <Box>
                    {currentStep.content({
                      control,
                      register,
                      errors,
                    })}
                  </Box>
                </FormStepWrapper>
              </motion.div>
            </AnimatePresence>

            <StepNavigation
              isFirstStep={activeStep === 0}
              isLastStep={isLastStep}
              isSending={isSubmitting || submitStatus === "sending"}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default MultiStepReachOutForm;
