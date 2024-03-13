import Link from "next/link";
import { ProductType } from "@/types/ProductsType";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";
import { GetProducts } from "@/hooks/ApiProducts";
import { ButtonLink } from "../Buttons/ButtonLink";
import { CgUnavailable } from "react-icons/cg";


const ProductCard = () => {
  const {products} = GetProducts()

  return (
    <>    
      {products.map((product: ProductType) => (
        <div
          className="flex flex-col w-[308px] h-[430px] bg-zinc-100 justify-around items-center rounded-2xl cursor-pointer hover:shadow-md transition-shadow"
          key={product.id}
        >
            <Link href={`/products/${product.id}`} className="w-full h-full">
            <div className="flex w-full h-[250px] justify-center items-center mb-8">
              <img
                src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.poster_path}`}
                alt={product.name}
                className="flex w-full h-full object-cover rounded-t-md"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 w-full h-[50px] p-4">
              <h3 className="text-center text-lg flex justify-center">
                {product.name}
              </h3>
              {product.quantity === 0 ? (
                    <p className="text-center text-md flex justify-center items-center gap-2">
                        Produto indisponível  <CgUnavailable />
                    </p>
                ) : (
                    <p className="text-center text-md flex justify-center">
                        {formatPrice(product.price)}
                    </p>
                )}
            </div>
            <div className="w-full flex justify-center items-center my-4 p-4">
            {product.quantity === 0 ? (
                    <button disabled className="w-full p-2 bg-black/20 rounded-md flex justify-center items-center gap-2">
                        Indisponivel <CgUnavailable />
                    </button>
                ) : (
                    <ButtonLink href={`/products/${product.id}`}>
                        Ver detalhes
                    </ButtonLink>
                )}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export { ProductCard };


