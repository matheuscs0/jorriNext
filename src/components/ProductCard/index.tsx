import Link from "next/link";
import { ProductType } from "@/types/ProductsType";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";
import { CgUnavailable } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useProducts } from "@/contexts/ProductsContext";


const ProductCard = () => {
  const {products, setProducts} = useProducts()

  async function getProducts() {
    try {
      const res = await fetch('https://mongodb-jorri-next-production.up.railway.app/api/produtos');
      if (!res.ok) {
        throw new Error("Erro");
      }
      const data = await res.json();
      setProducts(data); 
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>    
      {products && products.map((product: ProductType) => (
        <div
          className="flex flex-col w-[372px] h-[605px] bg-zinc-100 justify-around items-center cursor-pointer hover:shadow-md transition-shadow"
          key={product.id}
        >
            <Link href={`/products/${product.id}`} className="w-full h-full">
            <div className="flex w-full h-[465px] justify-center items-center mb-8 relative">
              <img
                src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.poster_path}`}
                alt={product.name}
                className="flex w-full h-full object-cover rounded-t-md"
              />
              <div className="absolute bottom-2">
                <Link className="" href={`/products/${product.id}`}>
                    <div className="bg-black text-white rounded-full p-1">
                      <IoCartOutline size={30}/>
                    </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 w-full">
              <h3 className="text-center text-lg flex justify-center font-bold">
                {product.name}
              </h3>
              {product.quantity === 0 ? (
                    <p className="text-center text-md flex justify-center items-center gap-2">
                        Produto indisponível  <CgUnavailable />
                    </p>
                ) : (
                  <>
                    <p className="text-center text-md flex justify-center">
                        {formatPrice(product.price)}
                    </p>
                    <p className="text-center text-md flex justify-center">ou em 3x de {formatPrice(product.price/3)}</p>
                  </>
                )}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export { ProductCard };


