import { useCardFormContext } from "@/contexts/CardFormContext";
import { Input } from "../Input"

export const CardForm = () => {
    
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
                    label="Nome no cartão"
                    placeholder="Nome no cartão"
                    type="text"
                    autoComplete="name" 
                    onChange={(e) => handleInputChange('cardName', e.target.value)}
                />
                <Input
                    label="Número no cartão"
                    placeholder="Número no cartão"
                    type="text"
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                />
                </div>
                <Input
                    label="CPF"
                    placeholder="CPF"
                    type="text"
                    onChange={(e) => handleInputChange('cpf', e.target.value)}
                />
                <Input
                    label="Mês de expiração"
                    placeholder="Ex: 02"
                    type="text"
                    onChange={(e) => handleInputChange('cardExpiryMonth', e.target.value)}
                />
                <Input
                    label="Ano de expiração"
                    placeholder="Ex: 2030"
                    type="text"
                    onChange={(e) => handleInputChange('cardExpiryYear', e.target.value)}
                />
                <Input
                    label="CVV"
                    placeholder="CVV"
                    type="text"
                    onChange={(e) => handleInputChange('cardCVV', e.target.value)}
                />
            </div>
    )
}