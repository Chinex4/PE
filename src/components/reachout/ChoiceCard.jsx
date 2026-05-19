import PropTypes from "prop-types";
import { Check } from "lucide-react";

const ChoiceCard = ({ label, selected, multiple, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-[58px] w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition ${
        selected
          ? "border-primary bg-primary/12 text-[#F5E9DC] shadow-[0_0_0_1px_rgba(244,162,97,0.28)]"
          : "border-white/10 bg-[#1C1C1C] text-neutral-300 hover:border-primary/60 hover:bg-[#23201d]"
      }`}
      aria-pressed={selected}
    >
      <span className="pr-4 leading-5">{label}</span>
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
          selected
            ? "border-primary bg-primary text-black"
            : "border-white/20 text-transparent"
        } ${multiple ? "rounded-md" : ""}`}
      >
        <Check size={14} strokeWidth={3} />
      </span>
    </button>
  );
};

ChoiceCard.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  multiple: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default ChoiceCard;
