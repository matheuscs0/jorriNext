import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

type CardFormProviderProps = {
  children: ReactNode;
}

interface CardFormData {
  cardName: string;
  cardNumber?: string;
  cardExpiryMonth?: string;
  cardExpiryYear?: string;
  cardCVV?: string;
  cpf: string
}

// Defina uma interface para o contexto
interface CardFormContextType {
  cardFormData: CardFormData;
  setCardFormData: Dispatch<SetStateAction<CardFormData>>;
}

// Crie o contexto
const CardFormContext = createContext<CardFormContextType | undefined>(undefined);

// Crie um provedor para o contexto
export const CardFormProvider = ({ children }: CardFormProviderProps) => {
  const [cardFormData, setCardFormData] = useState<CardFormData>({
    cardName: '',
    cardNumber: '',
    cardExpiryMonth: '',
    cardExpiryYear: '',
    cardCVV: '',
    cpf: ''
  });

  return (
    <CardFormContext.Provider value={{ cardFormData, setCardFormData }}>
      {children}
    </CardFormContext.Provider>
  );
};

// Crie um hook personalizado para usar o contexto
export const useCardFormContext = () => {
  const context = useContext(CardFormContext);
  if (!context) {
    throw new Error('useCardFormContext deve ser usado dentro de um CardFormProvider');
  }
  return context;
};
