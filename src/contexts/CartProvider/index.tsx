'use client'
import { ReactNode, createContext, useContext, useState } from 'react';
import { ProductType } from '@/types/ProductsType';

interface CartContextProps {
  children: ReactNode;
}

interface CartContextType {
  cartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  cartItems: ProductType[];
  setCartItems: (items: ProductType[]) => void;
  addProduct: (product: ProductType) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: CartContextProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const addProduct = (product: ProductType) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen, cartItems, setCartItems, addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

