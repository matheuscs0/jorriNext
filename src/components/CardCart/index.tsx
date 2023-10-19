import { formatPrice } from "@/functions/formatPrice";
import { useCart } from "@/contexts/CartProvider";
import { ProductType } from "@/types/ProductsType";


export const CardCart = (product: ProductType) => {
  const {cartItems} = useCart()

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      {cartItems.map((product:ProductType) => (
        <div
          className="w-full h-[100px] flex justify-center items-center gap-10 p-5"
          key={product.id}
        >
          <div className="w-[50%] h-full flex justify-center items-center">
            <img
              src={product.image}
              alt=""
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
          <div className="w-[50%] h-full flex flex-col justify-center items-center">
            <h5 className="text-sm text-center text-white">{product.title}</h5>
            <p className="text-sm text-center text-gray-300">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
