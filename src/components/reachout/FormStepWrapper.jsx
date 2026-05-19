import PropTypes from "prop-types";

const FormStepWrapper = ({ kicker, title, description, children }) => {
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {kicker}
        </p>
        <h2 className="font-heading text-2xl font-bold leading-tight text-[#F5E9DC] sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-sm leading-6 text-neutral-400">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
};

FormStepWrapper.propTypes = {
  kicker: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormStepWrapper;
