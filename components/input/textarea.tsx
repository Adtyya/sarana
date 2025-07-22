import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label: string;
  error?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  label,
  error = false,
  rows = 3,
  placeholder = " ",
  disabled = false,
  required = false,
  className = "",
  ...rest
}) => {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`
          peer relative w-full rounded border px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all
          autofill:bg-white
          ${
            error
              ? "border-pink-500 text-pink-500 focus:border-pink-500"
              : "border-slate-200 focus:border-sunflower"
          }
          focus:outline-none focus-visible:outline-none
          disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400
          ${className}
        `}
        {...rest}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all
          before:absolute capitalize before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all
          peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm
          ${
            required
              ? "peer-required:after:content-['\\00a0*'] peer-required:after:text-pink-500"
              : ""
          }
          ${
            error
              ? "peer-invalid:text-pink-500 peer-invalid:peer-focus:text-pink-500"
              : "peer-focus:text-midnight"
          }
          peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs
          peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Textarea;
