import Image from "next/image";
import { Input } from "../Input";
import { ButtonSociais } from "../Buttons/ButtonSociais";


export const Login = () => {
  return (
    <div className="w-[400px] h-[600px] flex flex-col bg-neutral-950 p-10 rounded-lg shadow-2xl">
            <div className='w-full flex justify-center items-start my-6'>
                <Image src='/logoJorri.png' width={150} height={150} alt='logoJorri'/>
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-3'>
                <ButtonSociais
                  hasIconGoogle={true}
                  hasIconFacebook={false}
                  span="Continue com o Google"
                />
                 <ButtonSociais
                  hasIconGoogle={false}
                  hasIconFacebook={true}
                  span="Continue com o Facebook"
                />
            </div>
            <div className='w-full mt-5 h-[1.5px] bg-neutral-900'></div>
        </div>
  );
};
