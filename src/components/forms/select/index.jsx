import "./styles.css";

import { Controller } from "react-hook-form";
import Select from "react-select";

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#ffffff",
    height: "31px",
    fontSize: "24px",
    marginTop: "18px",
    marginBottom: "5px",
    border: "1px solid #000000",
    borderColor: "#000000",
  }),
  option: (styles) => ({
    ...styles,
    fontSize: "24px",
    borderTop: "solid 1px black",
    borderLeft: "solid 1px black",
    borderRight: "solid 1px black",
    borderRadius: "4px",
    color: "rgb(10, 9, 9)",
  }),
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles }),
};

function FormSelect({ name, options, control, errors }) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            inputRef={ref}
            value={options.find((c) => c.value === value)}
            onChange={(val) => onChange(val?.value || val)}
            isClearable={true}
            isSearchable={false}
            options={options}
            styles={colourStyles}
          />
        )}
      />
      <p className="error-creacte">{errors[name]?.message}</p>
    </div>
  );
}

export default FormSelect;
