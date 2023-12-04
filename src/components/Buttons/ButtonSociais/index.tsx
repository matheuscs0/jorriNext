import { signIn } from "next-auth/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { BsGoogle } from "react-icons/bs";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
  } 

export const ButtonSociais = (props: ButtonProps) => {
    return (
       <>
            <button className='flex justify-center items-center bg-red-800 w-full h-14 rounded-md shadow-md gap-5 hover:bg-red-900 transition-all' onClick={() => signIn('google')}>
                <div className="w-full flex justify-center items-center">
                    <div className="w-[20%] justify-center flex items-center"><BsGoogle size={32} color="#ffffff" /></div>
                    <div className="w-[80%] flex justify-center items-center"><span className='text-sm text-white'>{props.children}</span></div>
                </div>
            </button>
       </>
    )
}