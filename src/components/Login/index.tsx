import Image from "next/image";
import { Input } from "../Input";
import { useState } from "react";
import { ButtonLink } from "../Buttons/ButtonLink";
import { Sign } from "./sign";
import {signIn, useSession} from 'next-auth/react'
import { BsGoogle } from "react-icons/bs";


export const Login = () => {
  const [Login, setLogin] = useState(true)

  return (
    <>
    {Login ? (
      <div className="w-[400px] h-[500px] flex flex-col bg-neutral-950 p-10 rounded-lg shadow-2xl">
      <div className="w-full h-full flex flex-col">
            <div className='w-full flex justify-center items-start my-6'>
                <Image src='/logoJorri.png' width={150} height={150} alt='logoJorri'/>
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-3'>
            <button className='flex justify-center items-center bg-red-800 w-full h-14 rounded-md shadow-md gap-5 hover:bg-red-900 transition-all' onClick={() => signIn('google')}>
                <div className="w-full flex justify-center items-center">
                    <div className="w-[20%] justify-center flex items-center"><BsGoogle size={32} color="#ffffff" /></div>
                    <div className="w-[80%] flex justify-center items-center"><span className='text-sm text-white'>Continue com o Google</span></div>
                </div>
            </button>
            </div>
            <div className='w-full mt-5 h-[1.5px] bg-neutral-900'></div>
            <div className="w-full h-full flex flex-col my-2 gap-5 text-white">
              <Input
                type="email"
                name="email"
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
        </div>
    ): (
      <Sign/>
    )}
  </>
  );
};
