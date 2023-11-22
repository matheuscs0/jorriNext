import { useCart } from "@/contexts/CartProvider"
import { useSideBar } from "@/contexts/SideBarContext";

export const HandlesSideBar = () => {
    const { cartOpen, setCartOpen, cartItems, setCartItems } = useCart()
    const { sideOpen, setSideOpen } = useSideBar();

    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }

    const toggleSideBar = () => {
        setSideOpen(!sideOpen)  
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
        addToCart,
        toggleSideBar,
        sideOpen,
        setSideOpen
    }
}
