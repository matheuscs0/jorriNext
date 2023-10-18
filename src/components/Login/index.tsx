import Image from "next/image";
import { Input } from "../Input";
import { ButtonSociais } from "../Buttons/ButtonSociais";
import { Button } from "../Buttons/DefaultButton";
import { useState } from "react";
import { ButtonLink } from "../Buttons/ButtonLink";
import { Sign } from "./sign";


export const Login = () => {
  const [Login, setLogin] = useState(true)

  return (
    <>
    {Login ? (
      <form className="w-[400px] h-[600px] flex flex-col bg-neutral-950 p-10 rounded-lg shadow-2xl">
      <div className="w-full h-full flex flex-col">
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
            <div className="w-full h-full flex flex-col my-2 gap-5">
              <Input
                type="text"
                name="text"
                placeholder="Insira seu email"
                label="Email"
              />
              <Input
                type="password"
                name="password"
                placeholder="Insira sua senha"
                label="Senha"
              />
              <ButtonLink
              href="/"
              >
                Log In
              </ButtonLink>
            </div>
            <div className="w-full flex justify-center items-center">
                <p className="text-sm text-white flex ">Não tem conta ainda? <button onClick={() => setLogin(false)} className="text-blue-400 ml-1"> se registre aqui</button></p>
            </div>
            </div>
        </form>
    ): (
      <Sign/>
    )}
  </>
  );
};
