import { HTMLAttributes } from "react";
import { CiSearch } from "react-icons/ci";

type InputProps = HTMLAttributes<HTMLInputElement> & {
  type: string;
  name: string;
  placeholder: string;
  hasIconSearch?: boolean;
};

const InputSearch = (props: InputProps) => {
  return (
    <div className="relative">
      <input
        {...props}
        className="text-xs peer cursor-pointer relative z-10 h-8 w-8 rounded-full border bg-transparent pl-8 outline-none focus:w-[250px] focus:cursor-text focus:border-zinc-300 transition-all"
      />
      <label className="absolute top-2.5 left-[2.8px]"><CiSearch size={25}/></label>
    </div>
  );
};

export { InputSearch };