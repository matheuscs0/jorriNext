'use client'
import { ReactNode, createContext, useContext, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartContextProps {
  children: ReactNode;
}

interface CartContextType {
  cartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: CartContextProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen, cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

