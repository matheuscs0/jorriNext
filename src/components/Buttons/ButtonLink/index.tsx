import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type ButtonLinkProps = {
  children: ReactNode;
} & LinkProps;

export const ButtonLink = ({ children, href, ...rest }: ButtonLinkProps) => {
  const pathname = usePathname();
  console.log(pathname);

  const isCurrentPath = pathname === href;
  return (
    <>
      <Link
        className="w-full h-10 rounded-lg bg-neutral-950 text-white text-md shadow-xl flex justify-center items-center"
        {...rest}
        href={href}
      >
        {children}
      </Link>
    </>
  );
};
