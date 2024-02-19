"use client";
import { ProductType } from "../../../types/ProductsType/index";
import { useState, useEffect } from "react";
import { ImageAbout } from "@/components/ImageAbout";
import { Button } from "@/components/Buttons/DefaultButton";
import { useCart } from "@/contexts/CartProvider";
import { formatPrice, installmentPrice } from "@/hooks/formatPrice/formatPrice";
import { useSize } from "@/contexts/SizeContext";

type ProductsPageProps = {
  params: {
    id: number;
  };
};

export type SizeType = {
  size: string;
  price: number;
};

export default function ProductsDetailsPage({ params }: ProductsPageProps) {
  const id = params.id;
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState<SizeType | null>(null);
  const { addProduct } = useCart();
  const { setContextSize } = useSize();

  const handleSizeClick = (size: SizeType) => {
    setSelectedSize(size);
    setContextSize(size);
    setProducts((prevProducts) =>
      (prevProducts as ProductType[]).map((product) => ({
      ...product,
      price: size.price,
    }))
    );
  };

  const handleImageClick = (imagePath: any) => {
    setSelectedImage(imagePath);
  };

  const handlePosterClick = () => {
    setSelectedImage(null);
  };

  async function getProducts() {
    try {
      const res = await fetch(`https://mongodb-jorri-next-production.up.railway.app/api/produtos/${id}`);
      if (!res.ok) {
        throw new Error("Erro");
      }
      const data = await res.json();
      setProducts([data]);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="w-full h-full flex justify-center mt-20 ">
      {products !== null &&
        products.map((product: ProductType) => (
          <div key={product.id} className="w-full">
            <div className={`w-full sm:flex-row justify-center gap-5 flex-col lg:flex xl:flex md:flex 2xl:flex`}>
            <div className={`flex justify-center gap-2 sm:gap-10`}>
              <div className="flex flex-col gap-2">
              {product.image_about_1 && (
                  <ImageAbout
                    src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.image_about_1}`}
                    onClick={() => handleImageClick(product.image_about_1)}
                  />
                )}
                {product.image_about_2 && (
                  <ImageAbout
                    src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.image_about_2}`}
                    onClick={() => handleImageClick(product.image_about_2)}
                  />
                )}
                {product.image_about_3 && (
                  <ImageAbout
                    src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.image_about_3}`}
                    onClick={() => handleImageClick(product.image_about_3)}
                  />
                )}
                {product.image_about_4 && (
                  <ImageAbout
                    src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.image_about_4}`}
                    onClick={() => handleImageClick(product.image_about_4)}
                  />
                )}
                {product.size_info && (
                  <ImageAbout
                    src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.size_info}`}
                    onClick={() => handleImageClick(product.size_info)}
                  />
                )}
                {selectedImage && (
                  <ImageAbout
                    src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.poster_path}`}
                    onClick={() => handleImageClick(product.poster_path)}
                  />
                )}
              </div>
              <img
                  src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${selectedImage || product.poster_path}`}
                  alt={product.name}
                  className="w-[300px] h-[300px] mr-0 cursor-pointer object-cover sm:w-[600px] sm:h-[600px]"
                  onClick={handlePosterClick}
                />
            </div>
            <div className={`w-full flex-col text-center mr-28 sm:justify-center sm:items-center sm:mr-0 sm:text-left sm:w-[500px]`}>
              <div className="flex flex-col gap-1 mb-10">
                <h1 className="font-bold text-4xl">{product.name}</h1>
                <p className={`text-md text-center sm:justify-center sm:items-center sm:mr-0 sm:text-left sm:w-full`}>cod: {product.id}</p>
              </div>
              <div className="flex flex-col mt-10 gap-1">
                <h1 className="text-4xl font-bold">{formatPrice(selectedSize ? selectedSize.price : product.price)}</h1>
                <h1 className="text-xl">3x de {installmentPrice(selectedSize ? selectedSize.price : product.price)} sem juros</h1>
              </div>
              <div className={`flex flex-col mt-10 items-center sm:justify-start sm:items-start sm:mr-0 sm:text-center sm:w-full`}>
                <h1 className="font-bold text-lg">Selecione um tamanho:</h1>
                <div className="flex mt-3">
                <ul className="flex gap-3">
                  {product.sizes.map((size) => (
                    <li
                      key={size.size}
                      className={`bg-black/10 text-black p-4 rounded-md cursor-pointer transition-all hover:shadow-md duration-300 hover:shadow-black/20 ${
                        size.size === selectedSize?.size ? "bg-black/100 text-white" : ""
                      }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      <span className="text-md">{size.size}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
              <div className={`w-full mt-5 sm:justify-center sm:items-center sm:mr-0 sm:text-center sm:w-80`}>
                <Button
                  bg="bg-black"
                  colorText="text-white"
                  onClick={()=> addProduct(product)}
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
              <div className={`flex flex-col mt-10 gap-2 items-center sm:justify-center sm:items-start sm:mr-0 sm:text-center sm:w-full`}>
                {product.description.map((item, index) => (
                  <div key={index}>
                    {typeof item === "string" ? (
                      <p className="text-lg font-bold">
                        {item}
                        </p>
                      ) : (
                        <>
                          <ul className="text-left">
                            <li>{item.espessura && <p className="text-md text-left origin-left">Espessura: {item.espessura}</p>}</li>
                            {item.comprimento && <p>Comprimento: {item.comprimento}</p>}
                            {item.pingente && <p>Pingente: {item.pingente}</p>}
                          </ul>
                        </>
                      )}
                    </div>
                   ))}
                </div>
              </div>
            </div>
            </div>
        ))}
    </section>
  );
}
