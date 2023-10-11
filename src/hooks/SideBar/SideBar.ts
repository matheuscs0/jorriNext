import { useCart } from "@/contexts/CartProvider"

export const HandlesSideBar = () => {
    const { cartOpen, setCartOpen } = useCart()

    const toggleCart = () => {
        setCartOpen(!cartOpen)
    }
    
    const handleCloseCart = () => {
        setCartOpen(false)
    }

    return {
        cartOpen,
        setCartOpen,
        toggleCart,
        handleCloseCart
    }
}
