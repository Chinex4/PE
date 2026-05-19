import PropTypes from "prop-types";
import { Button, CircularProgress } from "@mui/material";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

const StepNavigation = ({
  isFirstStep,
  isLastStep,
  isSending,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <Button
        type="button"
        onClick={onPrevious}
        disabled={isFirstStep || isSending}
        startIcon={<ArrowLeft size={17} />}
        sx={{
          color: "#F5E9DC",
          visibility: isFirstStep ? "hidden" : "visible",
          textTransform: "none",
          borderRadius: "10px",
          px: 2,
          py: 1.1,
          "&.Mui-disabled": { color: "rgba(245,233,220,0.35)" },
        }}
      >
        Previous
      </Button>

      <Button
        type={isLastStep ? "submit" : "button"}
        onClick={isLastStep ? undefined : onNext}
        disabled={isSending}
        endIcon={
          isSending ? (
            <CircularProgress size={17} sx={{ color: "#111" }} />
          ) : isLastStep ? (
            <Send size={17} />
          ) : (
            <ArrowRight size={17} />
          )
        }
        sx={{
          width: { xs: "100%", sm: "auto" },
          minWidth: 190,
          bgcolor: "#F4A261",
          color: "#111",
          fontWeight: 700,
          textTransform: "none",
          borderRadius: "10px",
          px: 3,
          py: 1.25,
          "&:hover": { bgcolor: "#f7b47c" },
          "&.Mui-disabled": {
            bgcolor: "rgba(244,162,97,0.5)",
            color: "rgba(17,17,17,0.65)",
          },
        }}
      >
        {isSending ? "Sending..." : isLastStep ? "Submit Application" : "Next"}
      </Button>
    </div>
  );
};

StepNavigation.propTypes = {
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  isSending: PropTypes.bool.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default StepNavigation;
