import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import ChoiceCard from "./ChoiceCard";

const ChoiceGroup = ({ control, name, options, multiple = false, columns = 2 }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const value = multiple ? field.value || [] : field.value;

        const handleSelect = (option) => {
          if (!multiple) {
            field.onChange(option);
            return;
          }

          const nextValue = value.includes(option)
            ? value.filter((item) => item !== option)
            : [...value, option];

          field.onChange(nextValue);
        };

        return (
          <div>
            <div
              className={`grid gap-3 ${
                columns === 1 ? "grid-cols-1" : "sm:grid-cols-2"
              }`}
            >
              {options.map((option) => (
                <ChoiceCard
                  key={option}
                  label={option}
                  multiple={multiple}
                  selected={
                    multiple ? value.includes(option) : value === option
                  }
                  onClick={() => handleSelect(option)}
                />
              ))}
            </div>
            {fieldState.error ? (
              <FormHelperText error sx={{ mt: 1.25, ml: 0 }}>
                {fieldState.error.message}
              </FormHelperText>
            ) : null}
          </div>
        );
      }}
    />
  );
};

ChoiceGroup.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  multiple: PropTypes.bool,
  columns: PropTypes.oneOf([1, 2]),
};

export default ChoiceGroup;
