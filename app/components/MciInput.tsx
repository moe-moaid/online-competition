import React, { forwardRef } from "react";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  required?: boolean;
  label?: string;
  placeholder: string;
  name: string;
  fullWidth?: boolean;
}
const MciInput = forwardRef<HTMLInputElement, inputProps>(
  (
    { className, name, required, label, placeholder, fullWidth, ...props },
    ref
  ) => {
    return (
      <div
        className={`flex flex-col gap-y-3 text-white ${
          fullWidth ? "w-full" : ""
        } ${className}`}
      >
        {/* <label htmlFor={name}>{`${label}`}</label> */}
        <label htmlFor={name}>
          {label ? label : ""}
          {required && <span className="text-red-600">*</span>}
        </label>
        <input
          {...props}
          ref={ref}
          type="text"
          name={name}
          placeholder={placeholder}
          className="outline-none border border-white rounded-md px-3 py-1 bg-transparent text-[#838383] hover:border-legendary-500 hover:text-white focus:border-legendary-500 focus:text-white"
          required={required ? true : false}
        />
      </div>
    );
  }
);

export default MciInput;
