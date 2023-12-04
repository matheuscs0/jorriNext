'use client'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ProductType } from '@/types/ProductsType';

interface CartContextProps {
  children: ReactNode;
}

interface CartContextType {
  cartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  cartItems: ProductType[];
  setCartItems: (items: ProductType[]) => void;
  addProduct: (product: ProductType) => void;
  deleteProduct: (product: ProductType) => void;
  totalAmount: number; 
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: CartContextProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductType[]>([])
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      const total = cartItems.reduce((total, product) => total + product.price, 0);
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, [cartItems]);
    
  const addProduct = (product: ProductType) => {
    const updatedCartItems = [...cartItems, product];
  
    setCartItems(updatedCartItems);
    setCartOpen(!cartOpen);

  };

  const deleteProduct = (product: ProductType) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };


  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen, cartItems, setCartItems, addProduct, deleteProduct, totalAmount  }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

