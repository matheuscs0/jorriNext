import {  ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = (props: ButtonProps) => {
  return (
      <button className="w-full h-8 rounded-lg bg-neutral-950 text-white text-xs shadow-xl" {...props}>
        {props.children}
      </button>
    );
}
