import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center border-t-[1px]">
      <div className="w-full flex justify-center items-center mt-2">
        <h1 className="text-xl font-bold mb-5 sm:md-0 md:mb-0">Central de atendimento</h1>
      </div>
      <div className="w-full flex-col justify-center items-center sm:flex md:flex-row sm:justify-around md:justify-around text-center">
        <div className="flex flex-col items-center sm:items-start md:items-start mb-5 sm:mb-0 md:mb-0">
          <div className="flex w-[220px] justify-items-start items-center border-[1px] rounded-md p-1 gap-1">
            <div>
              <IoPhonePortraitOutline size={20} />
            </div>
            <Link
              href="https://api.whatsapp.com/send/?phone=5511961083809&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              +55 (11) 961083809
            </Link>
          </div>
          <div className="flex w-[220px] justify-items-start items-center border-[1px] rounded-md p-1 gap-1 mt-1">
            <div>
              <MdMailOutline size={20} />
            </div>
            <Link
              href="mailto:contato.jorri@gmail.com"
              target="_blank"
            >
              contato.jorri@gmail.com
            </Link>
          </div>
          <p className="text-sm flex mt-1">
            Atendimento de segunda à sexta, das 9h-12h e 13h-15h
          </p>
          </div>
        <div className="">
          <h1 className="text-lg font-bold">Informações legais</h1>
          <div className="flex flex-col">
            <Link href="/politica-de-privacidade">•Politica de privacidade</Link>
            <Link href="">•Sobre nós</Link>
          </div>
        </div>
      </div>
      <div className="w-full flex-col justify-around items-center mt-5 sm:flex md:flex-row">
        <div className="flex justify-center items-center flex-col mb-5">
          <h1 className="text-xl font-bold">Formas de pagamento</h1>
          <div className="flex justify-center items-center gap-2">
            <img
              src="https://cdn.sistemawbuy.com.br/img/bandeiras/visa.png"
              alt=""
              className="w-10 p-1 border-[1px]"
            />
            <img
              src="https://cdn.sistemawbuy.com.br/img/bandeiras/mastercard.png"
              alt=""
              className="w-10 p-1 border-[1px]"
            />
            <img
              src="https://cdn.sistemawbuy.com.br/img/bandeiras/elo.png"
              alt=""
              className="w-10 p-1 border-[1px]"
            />
            <img
              src="https://cdn.sistemawbuy.com.br/img/bandeiras/hipercard.png"
              alt=""
              className="w-10 p-1 border-[1px]"
            />
            <img
              src="https://cdn.sistemawbuy.com.br/img/bandeiras/diners.png"
              alt=""
              className="w-10 p-1 border-[1px]"
            />
            <img
              src="https://cdn.sistemawbuy.com.br/img/bandeiras/booklet.png"
              alt=""
              className="w-10 p-1 border-[1px]"
            />
            <img
              src="https://cdn.sistemawbuy.com.br/img/bandeiras/pix.png"
              alt=""
              className="w-10 p-1 border-[1px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mb-5">
          <h1 className="text-xl font-bold">Segurança</h1>
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/Logonovo_pagseguro-cinza.png"
              alt=""
              className="w-32 p-1 border-[1px]"
            />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Siga-nos</h1>
        <div className="flex justify-center items-center gap-2">
          <Link href="https://www.instagram.com/jorri.joias/" target="_blank">
            <FaInstagram size={30} />
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=5511961083809&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <FaWhatsapp size={30} />
          </Link>
        </div>
      </div>
      <div className="w-full flex border-t-[1px] items-center justify-center mt-5">
          <p className="text-sm p-2">Todos direitos reservados à Jorri Jóias</p>
      </div>
    </footer>
  );
};
