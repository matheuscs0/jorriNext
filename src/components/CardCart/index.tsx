import { formatPrice } from "@/functions/formatPrice";
import { useCart } from "@/contexts/CartProvider";
import { ProductType } from "@/types/ProductsType";
import {FaTrashAlt} from 'react-icons/fa'


export const CardCart = () => {
  const {cartItems, deleteProduct} = useCart()

  return (
    <div className="w-full flex flex-col justify-center items-center mt-5 gap-10">
      {cartItems.map((product:ProductType) => (
        <div
          className="w-full h-[100px] flex justify-around items-center p-5"
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
          <div className="flex justify-center items-center m-1">
             <FaTrashAlt onClick={() => deleteProduct(product)} className="cursor-pointer" size={15}/> 
          </div>
        </div>
      ))}
    </div>
  );
};
