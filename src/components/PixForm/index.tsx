import { useCardFormContext } from "@/contexts/CardFormContext";
import { Input } from "../Input"

export const PixForm = () => {
    const { cardFormData, setCardFormData } = useCardFormContext();

    const handleInputChange = (key: keyof typeof cardFormData, value: string) => {
      setCardFormData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    };

    return(
        <div className="flex flex-wrap w-full justify-center items-center gap-5 p-3">
            <div className="w-full flex flex-col gap-2">
                <Input
                    label="Nome completo"
                    placeholder="Nome"
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
            </div>
    )
}