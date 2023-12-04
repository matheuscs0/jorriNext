import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
} & LinkProps;

export const ButtonLink = ({ children, href, ...rest }: ButtonLinkProps) => {

  return (
    <>
      <Link
        className="w-full h-10 rounded-lg bg-neutral-950 text-white text-sm shadow-xl flex justify-center items-center"
        {...rest}
        href={href}
      >
        {children}
      </Link>
    </>
  );
};
