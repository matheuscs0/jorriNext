'use client'
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Input } from "../Input"
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { Button } from "../Buttons/DefaultButton";
import { useFormContext } from "@/contexts/formContext";
import { useCardFormContext } from "@/contexts/CardFormContext";
import toast from "react-hot-toast";
import { toastConfig } from "@/app/helper/toast/toastConfig";

export const SearchCep = () => {
    const { cepFormData, setCepFormData } = useFormContext();
    const { cardFormData, setCardFormData } = useCardFormContext();
    const [open, setOpen] = useState(true)

    const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newCep = event.target.value;
      setCepFormData((prevData) => ({ ...prevData, cep: newCep }));
    };

    const handleInputChange = (key: keyof typeof cardFormData, value: string) => {
      setCardFormData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    };
  
    const searchCep = async () => {
      try {
        const response = await axios.get(`https://cep.awesomeapi.com.br/json/${cepFormData.cep}`);
        const { data } = response;
        console.log(data)
        setCepFormData((prevData) => ({
          ...prevData,
          address: data.address,
          city: data.city,
          state: data.state,
        }));
      } catch (error) {
        toast.error("Erro ao buscar CEP, verifique os campos", toastConfig);
      }
    };
  
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      console.log(cepFormData);
    };

    return (
        <form onSubmit={handleSubmit} className={`w-[350px] ${open ? '' : 'h-28'} flex flex-col bg-zinc-100 rounded-md shadow-md duration-500 transition-all sm:w-[750px] `}>
            <div className="w-full border-b p-3">
                <h1 className=" font-bold text-xl">Endereço para envio</h1>
            </div>
            <div className={`${open ? 'flex' : 'hidden'}`}>
            <div className="flex flex-wrap w-full justify-center items-center gap-5 p-3">
                <div className="w-full flex items-center gap-10 justify-center">
                <Input
                    label="Nome"
                    placeholder="Nome no completo"
                    type="text"
                    autoComplete="name" 
                    onChange={(e) => handleInputChange('cardName', e.target.value)}
                />
               <Input
                    label="CPF"
                    placeholder="CPF"
                    type="text"
                    onChange={(e) => handleInputChange('cpf', e.target.value)}
                />
                </div>
                <div className="flex gap-2">
                <Input
                    label="CEP"
                    placeholder="CEP"
                    type="text"
                    autoComplete="cep"
                    onChange={handleCepChange}
                    value={cepFormData.cep && cepFormData.cep}
                />
                <button type="button" onClick={searchCep} className="bg-black/90 text-white mt-5 p-1 text-xl rounded-md"><CiSearch /></button>
                </div>
                <Input
                    label="Endereço"
                    value={cepFormData.address}
                    placeholder="Endereço"
                    type="text"
                    autoComplete="addres"
                    disabled
                />
                <Input
                    label="Cidade"
                    placeholder="Cidade"
                    type="text"
                    autoComplete="addres"
                    value={cepFormData.city}
                    disabled
                />
                <Input
                    label="Estado"
                    placeholder="Estado"
                    type="text"
                 
                    disabled
                    value={cepFormData.state}
                />
                <Input
                    label="Número"
                    placeholder="Número"
                    type="text"
                    
                    onChange={(event) => setCepFormData((prevData) => ({ ...prevData, number: event.target.value }))}
                />
                <Input
                    label="Complemento"
                    placeholder="Complemento"
                    type="text"
                    onChange={(event) => setCepFormData((prevData) => ({ ...prevData, complemento: event.target.value }))}
                />
                <div className="w-96 flex justify-center items-center"><Button bg="bg-black" colorText="text-white" type="submit" onClick={() => setOpen(false)}>Salvar</Button></div>
            </div>
            </div>
                <div className={`w-full ${open ? 'hidden' : 'flex'} justify-center items-center mt-4`}><button className="bg-black text-white w-80 h-8 rounded-md shadow-md" onClick={() => setOpen(true)}>Voltar</button></div>
        </form>
    )
}