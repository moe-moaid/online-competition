import { Span } from "next/dist/trace";
import React from "react";

type inputProps = {
  className?: string;
  required?: boolean;
  label?: string;
  placeholder: string;
  name: string;
fullWidth?: boolean;
};
function MciInput({
  className,
  name,
  required,
  label,
  placeholder,
  fullWidth
}: inputProps) {
  return (
    <div className={`flex flex-col gap-y-3 text-white ${fullWidth ? 'w-full' : ''} ${className}`}>
      {/* <label htmlFor={name}>{`${label}`}</label> */}
      <label htmlFor={name}>{label ? label : ''}{required && <span className="text-red-600">*</span>}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="outline-none border border-white rounded-md px-3 py-1 bg-transparent text-[#838383] hover:border-legendary-500 hover:text-white focus:border-legendary-500 focus:text-white"
        required={required ? true : false}
      />
    </div>
  );
}

export default MciInput;
