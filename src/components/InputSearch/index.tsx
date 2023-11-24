
import { ChangeEvent, HTMLAttributes } from "react";
import { CiSearch } from "react-icons/ci";

type InputProps = HTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  name: string;
  type: string;
  hasIconSearch?: boolean;
  value: string;
  onClick: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputSearch = (props: InputProps) => {

  return (
    <div className="relative">
      <input
        {...props}
        className="text-sm peer relative h-10 w-[350px] border-b pl-4 outline-none sm:w-[650px]"
      />
      <button className="absolute top-2.5 right-2 hover:scale-150 transition-all duration-300" onClick={props.onClick}><CiSearch size={25}/></button>
    </div>
  );
};

export { InputSearch };