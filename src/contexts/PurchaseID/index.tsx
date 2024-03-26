import { createContext, useContext, useState, ReactNode } from "react";

type IdContextType = {
  ids: string[];
  addId: (id: string) => void;
  hasId: (id: string) => boolean;
};

const IdContext = createContext<IdContextType | undefined>(undefined);

export const useIds = () => {
  const context = useContext(IdContext);
  if (!context) {
    throw new Error("useIds deve ser usado dentro de um IdProvider");
  }
  return context;
};

export const IdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ids, setIds] = useState<string[]>([]);

  const addId = (id: string) => {
    setIds((prevIds) => [...prevIds, id]);
  };

  const hasId = (id: string) => {
    return ids.includes(id);
  };

  return (
    <IdContext.Provider value={{ ids, addId, hasId }}>
      {children}
    </IdContext.Provider>
  );
};

