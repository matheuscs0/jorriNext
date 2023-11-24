import Image from "next/image";
import { Input } from "@/components/Input";
import { useEffect, useState } from "react";
import { ButtonLink } from "../../Buttons/ButtonLink/index";
import { ButtonSociais } from "@/components/Buttons/ButtonSociais";
import { IoIosArrowBack } from "react-icons/io";
import { Login } from "../index";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from './../../../contexts/userContext/index';
import { auth, entrarWithGoogle } from '@/utils/firebase/authentication';

const schema = z.object({
  name: z.string().min(3, { message: "Insira um nome válido" }),
  email: z.string().email({ message: "Insira um email válido" }),
  cpf: z.string().min(11, { message: "Insira um CPF válido" }),
  password: z.string().min(6, { message: "Insira uma senha de pelo menos 6 caracteres" }),
});

type FormData = z.infer<typeof schema>;

export const Sign = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  console.log(errors);
  const [Sign, setSign] = useState(true);
  const {user, setUser} = useAuth()

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        const {uid, displayName, email, photoURL} = user
        setUser({
          id: uid,
          photo: photoURL,
          name:displayName,
          email: email
        })
      }
      })
  },[])

  return (
    <>
      {Sign ? (
        <form onSubmit={handleSubmit((data) => console.log(data))} className="w-[400px] h-[750px] flex flex-col bg-neutral-950 p-10 rounded-lg shadow-2xl">
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex justify-start items-start">
              <IoIosArrowBack
                className="text-white cursor-pointer"
                onClick={() => setSign(false)}
              />
            </div>
            <div className="w-full flex justify-center items-start my-6">
              <Image
                src="/logoJorri.png"
                width={150}
                height={150}
                alt="logoJorri"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-3">
              <ButtonSociais
                hasIconGoogle={true}
                onClick={() => entrarWithGoogle()}
                hasIconFacebook={false}
                span="Se inscreva com o Google"
              />
              <ButtonSociais
                hasIconGoogle={false}
                hasIconFacebook={true}
                span="Se inscreva com o Facebook"
              />
            </div>
            <div className="w-full mt-5 h-[1.5px] bg-neutral-900"></div>
            <div className="w-full h-full flex flex-col my-1 gap-3">
              <Input
                type="name" 
                {...register("name")}
                helperText={errors.name?.message}
                placeholder="Insira seu nome completo"
                label="Nome"
              />
              <Input
                type="text"
                {...register("cpf")}
                helperText={errors.cpf?.message}
                placeholder="Insira seu CPF"
                label="CPF"
              />
              <Input
                type="text"
                {...register("email")}
                helperText={errors.email?.message}
                placeholder="Insira seu email"
                label="Email"
              />
              <Input
                type="password"
                {...register("password")}
                helperText={errors.password?.message}
                placeholder="Insira sua senha"
                label="Senha"
              />
              <ButtonLink href="/">Inscrever-se</ButtonLink>
            </div>
          </div>
        </form>
      ) : (
        <Login />
      )}
    </>
  );
};
