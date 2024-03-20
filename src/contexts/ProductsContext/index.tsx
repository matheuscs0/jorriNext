"use client";
import { ProductType } from "@/types/ProductsType";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ProductsContextType {
  products: ProductType[] | null;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[] | null>>;
}
const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

type EventsInterface = {
  children: ReactNode;
};

export const ProductsProvider = ({ children }: EventsInterface) => {
  const [products, setProducts] = useState<ProductType[] | null>(null);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return context;
};