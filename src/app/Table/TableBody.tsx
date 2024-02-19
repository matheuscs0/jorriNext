'use client'
import { Loading } from "@/components/Loading";
import { useCart } from "@/contexts/CartProvider";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";
import { ProductType } from "@/types/ProductsType";
import { useEffect, useState } from "react";

export function TableBody() {
    const { cartItems, deliveryTime } = useCart();
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (deliveryTime) {
          setLoading(false);
        }
      }, [deliveryTime]);

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
                            <img src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.poster_path}`} alt="" className="w-24 h-24" />
                        </td>
                        <td className="text-left text-sm py-1 text-[#5D6D74]">    
                            <p className="">
                                {product.name}
                            </p>
                            <p>
                                cod: {product.id}
                            </p>
                        </td>
                        <td className="text-left text-sm py-1 text-[#5D6D74]">Em ate{loading ? (<Loading size={20}/>) : ( <p>{deliveryTime}</p>)} dias uteis</td>
                        <td className="text-left text-sm py-1 text-[#5D6D74]">{formatPrice(product.price)}</td>
                        <td className="text-left text-sm py-1 text-[#5D6D74] pl-10">1</td>
                    </tr>
                </tbody>
            ))}
        </>
    );
}
