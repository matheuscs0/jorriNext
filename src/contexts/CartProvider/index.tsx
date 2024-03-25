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
  SubTotalAmount: number; 
  frete: number;
  setFrete: (amount: number) => void;
  deliveryTime: number;
  setDeliveryTime: (amount: number) => void;
  discount: number;
  setDiscount: (amount: number) => void;
  barcode: string
  setBarcode: (amount: string) => void;
  qrCode: string
  setQrCode: (amount: string) => void
  purchaseID: string;
  setPurchaseID: (id: string) => void;
}


const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: CartContextProps) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductType[]>([])
  const [totalAmount, setTotalAmount] = useState(0);
  const [SubTotalAmount, setSubTotalAmount] = useState(0);
  const [frete, setFrete] = useState(0)
  const [deliveryTime, setDeliveryTime] = useState(0)
  const [discount, setDiscount] = useState(0);
  const [barcode, setBarcode] = useState('')
  const [qrCode, setQrCode] = useState('')
  const  [purchaseID, setPurchaseID]  = useState('');


  useEffect(() => {
    const calculateTotalAmount = () => {
      const subtotal = cartItems.reduce((total, product) => total + Number(product.price), 0);
      const discountAmount = subtotal * (discount / 100);
      const total = subtotal + Number(frete) - discountAmount;
      setTotalAmount(total);
    };
  
    calculateTotalAmount();
  }, [cartItems, frete, discount]);

  useEffect(() => {
    const calculateSubTotalAmount = () => {
      const total = cartItems.reduce((total, product) => total + product.price, 0);
      setSubTotalAmount(total);
    };

    calculateSubTotalAmount();
  }, [cartItems]);
    
  const addProduct = (product: ProductType) => {
    const updatedCartItems = [...cartItems, product];
  
    setCartItems(updatedCartItems);
    setCartOpen(!cartOpen);

  };

  const calculateDiscount = () => {
    let newDiscount = 0;
  
    if (cartItems.length === 1) {
      newDiscount = 5;
    } else if (cartItems.length === 2) {
      newDiscount = 10;
    } else if (cartItems.length >= 3) {
      newDiscount = 15;
    }
  
    setDiscount(newDiscount);
  };

  const setFreteValue = (valorFrete: number) => {
    setFrete(valorFrete);
  };

  const deleteProduct = (product: ProductType) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const calculateTotalAmount = () => {
      const subtotal = cartItems.reduce((total, product) => total + Number(product.price), 0);
      const discountAmount = subtotal * (discount / 100);
      const total = subtotal + Number(frete) - discountAmount;
      setTotalAmount(total);
    };
  
    calculateTotalAmount();
  }, [cartItems, frete, discount]);

  useEffect(() => {
    calculateDiscount();
  }, [cartItems]);


  return (
    <CartContext.Provider value={{ cartOpen, setCartOpen, cartItems, setCartItems, addProduct, deleteProduct, totalAmount, frete, setFrete, SubTotalAmount, deliveryTime, setDeliveryTime, discount, setDiscount, barcode, setBarcode, qrCode, setQrCode, purchaseID,
      setPurchaseID }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

