import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", name = "", ...props }, ref) => {
    return (
      <div>
        <p className="flex pl-1 text-white">{props.label}</p>
        <input
          type={type}
          id={name}
          {...props}
          ref={ref}
          className="w=[300px] h-10 rounded-md bg-slate-100 p-5 outline-none text-md text-neutral-950"
        />
        {props.helperText && (
          <p className="text-xs text-red-600 p-1">{props.helperText}</p>
        )}
      </div>
    );
  }
);
