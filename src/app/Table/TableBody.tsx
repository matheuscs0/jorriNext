'use client'
import { useCart } from "@/contexts/CartProvider";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";
import { ProductType } from "@/types/ProductsType";

export function TableBody() {
    const { cartItems } = useCart();

    // Função para calcular o total dos valores dos produtos
    const calculateTotal = () => {
        return cartItems.reduce((total, product) => total + product.price, 0);
    };

    return (
        <>
            {cartItems.map((product: ProductType) => (
                <tbody className="border-b" key={product.id}>
                    <tr>
                        <td className="text-left text-sm py-1 text-[#5D6D74]">
                            <img src={`http://localhost:3002${product.poster_path}`} alt="" className="w-24 h-24" />
                        </td>
                        <td className="text-left text-sm py-1 text-[#5D6D74]">    
                            <p className="">
                                {product.name}
                            </p>
                            <p>
                                cod: {product.id}
                            </p>
                        </td>
                        <td className="text-left text-sm py-1 text-[#5D6D74]">Em ate 4 dias uteis</td>
                        <td className="text-left text-sm py-1 text-[#5D6D74]">{formatPrice(product.price)}</td>
                        <td className="text-left text-sm py-1 text-[#5D6D74] pl-10">1</td>
                    </tr>
                </tbody>
            ))}
        </>
    );
}
