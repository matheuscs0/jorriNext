import { useCart } from "@/contexts/CartProvider"

export const HandlesSideBar = () => {
    const { cartOpen, setCartOpen, cartItems, setCartItems } = useCart()

    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }

    const addToCart = () => {
        const newItems = [...cartItems];
        setCartItems(newItems);
      };
    
    const handleCloseCart = () => {
        setCartOpen(false)
    }

    return {
        cartOpen,
        setCartOpen,
        cartItems,
        setCartItems,
        toggleCart,
        handleCloseCart, 
        addToCart
    }
}
