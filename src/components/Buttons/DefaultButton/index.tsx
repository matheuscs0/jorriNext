import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bg: string;
  colorText: string
  onAddToCart: () => void
}

export const Button = (props: ButtonProps) => {
  const buttonClass = `w-full h-10 rounded-lg text-md ${props.colorText} shadow-xl ${props.bg}`;

  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  );
}

