import { HTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";

type InputProps = HTMLAttributes<HTMLInputElement> & {
  type: string;
  name: string;
  placeholder: string;
  hasIconSearch?: boolean;
};

const InputSearch = (props: InputProps) => {
  return (
      <input
        {...props}
        className="text-xs peer cursor-pointer relative z-10 h-7 w-7 rounded-full border bg-transparent pl-4 outline-none focus:w-[200px] focus:cursor-text focus:border-zinc-300 focus:pl-4 focus:pr-1 transition-all"
      />
  );
};

export { InputSearch };