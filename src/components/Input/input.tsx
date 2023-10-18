import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "", name = "", ...props }, ref) => {
    return (
      <div>
      <label className="block text-sm font-medium text-white">
        {props.label}
      </label>
      <input
        className="w-full border bg-neutral-100 rounded-md py-2 px-3 text-gray-950 focus:outline-none focus:ring-1 focus:ring-neutral-950- focus:border-transparent"
        type={type}
        name={name}
        ref={ref}
        {...props}
      />
      {props.helperText && (
        <p className="text-xs text-red-600">{props.helperText}</p>
      )}
    </div>
    );
  }
);
