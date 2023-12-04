import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

type FormProviderProps ={
    children: ReactNode
}

interface FormData {
  cep: string;
  address: string;
  city: string;
  state: string;
  number: string;
  complemento: string;
}

// Defina uma interface para o contexto
interface FormContextType {
  cepFormData: FormData;
  setCepFormData: Dispatch<SetStateAction<FormData>>;
}

// Crie o contexto
const CepFormContext = createContext<FormContextType | undefined>(undefined);

// Crie um provedor para o contexto
export const CepFormProvider = ({ children }: FormProviderProps) => {
  const [cepFormData, setCepFormData] = useState<FormData>({
    cep: '',
    address: '',
    city: '',
    state: '',
    number: '',
    complemento: '',
  });

  return (
    <CepFormContext.Provider value={{ cepFormData, setCepFormData }}>
      {children}
    </CepFormContext.Provider>
  );
};

// Crie um hook personalizado para usar o contexto
export const useFormContext = () => {
  const context = useContext(CepFormContext);
  if (!context) {
    throw new Error('useFormContext deve ser usado dentro de um FormProvider');
  }
  return context;
};
