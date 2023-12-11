import Image from "next/image";
import { Input } from "@/components/Input";
import { useState } from "react";
import { ButtonLink } from "../../Buttons/ButtonLink/index";
import { ButtonSociais } from "@/components/Buttons/ButtonSociais";
import { IoIosArrowBack } from "react-icons/io";
import { Login } from "../index";
import { useSession } from "next-auth/react";

export const Sign = () => {
  const [Sign, setSign] = useState(true);
  const {data: session } = useSession()
  console.log(session)

  return (
    <>
      {Sign ? (
        <div className="w-[400px] h-[250px] flex flex-col bg-neutral-950 p-10 rounded-lg shadow-2xl">
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
              <ButtonSociais>Se inscreva com o Google</ButtonSociais>
            </div>
            <div className="w-full mt-5 h-[1.5px] bg-neutral-900"></div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};
