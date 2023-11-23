"use client";
import { ProductType } from "../../../types/ProductsType/index";
import { useState, useEffect } from "react";
import { ImageAbout } from "@/components/ImageAbout";
import { Button } from "@/components/Buttons/DefaultButton";
import { useCart } from "@/contexts/CartProvider";
import { formatPrice, installmentPrice } from "@/hooks/formatPrice/formatPrice";

type ProductsPageProps = {
  params: {
    id: number;
  };
};

export default function ProductsDetailsPage({ params }: ProductsPageProps) {
  const id = params.id;
  console.log(id)
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { addProduct } = useCart();

  const handleImageClick = (imagePath: any) => {
    setSelectedImage(imagePath);
  };

  const handlePosterClick = () => {
    setSelectedImage(null);
  };

  async function getProducts() {
    try {
      const res = await fetch(`http://localhost:3002/api/produtos/${id}`);
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
    <section className="w-full h-full flex justify-center items-center mx-10">
      {products !== null &&
        products.map((product: ProductType) => (
          <div key={product.id} className="w-full flex-col">
            <div className="w-full flex justify-center gap-5">
            <div className="w-1/2 flex justify-center gap-10">
              <div className="flex flex-col gap-2">
              {product.image_about_1 && (
                  <ImageAbout
                    src={`http://localhost:3002${product.image_about_1}`}
                    onClick={() => handleImageClick(product.image_about_1)}
                  />
                )}
                {product.image_about_2 && (
                  <ImageAbout
                    src={`http://localhost:3002${product.image_about_2}`}
                    onClick={() => handleImageClick(product.image_about_2)}
                  />
                )}
                {product.image_about_3 && (
                  <ImageAbout
                    src={`http://localhost:3002${product.image_about_3}`}
                    onClick={() => handleImageClick(product.image_about_3)}
                  />
                )}
                {product.image_about_4 && (
                  <ImageAbout
                    src={`http://localhost:3002${product.image_about_4}`}
                    onClick={() => handleImageClick(product.image_about_4)}
                  />
                )}
                {selectedImage && (
                  <ImageAbout
                    src={`http://localhost:3002${product.poster_path}`}
                    onClick={() => handleImageClick(product.poster_path)}
                  />
                )}
              </div>
              <img
                  src={`http://localhost:3002${selectedImage || product.poster_path}`}
                  alt={product.name}
                  className="w-[600px] h-[600px] cursor-pointer object-cover"
                  onClick={handlePosterClick}
                />
            </div>
            <div className="w-[500px] flex-col text-left mr-28">
              <div className="flex flex-col gap-1 mb-10">
                <h1 className="font-bold text-4xl">{product.name}</h1>
                <p className="text-md text-left">cod: {product.id}</p>
              </div>
                <div className="flex flex-col mt-10 gap-1">
                <h1 className="text-4xl font-bold">{formatPrice(product.price)}</h1>
                <h1 className="text-xl">3x de {installmentPrice(product.price)} sem juros</h1>
              </div>
              <div className="flex flex-col mt-10">
                <h1 className="font-bold text-lg">Tamanhos:</h1>
                <div className="flex mt-3">
                  <ul className="flex gap-3">
                    {product.sizes.map((size) => (
                      <li
                        key={size.size}
                        className="bg-black/10 text-black p-4 rounded-md cursor-pointer transition-all hover:shadow-md duration-300 hover:shadow-black/20"
                      >
                        <span className="text-md">{size.size}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-80 mt-5">
                <Button
                  bg="bg-black"
                  colorText="text-white"
                  onClick={() => addProduct(product)}
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
            </div>

            {/* Descrição do Produto */}
            <div className="flex flex-col w-full h-full mt-10 items-center">
              <div className="flex flex-col mt-10 gap-2">
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
        ))}
    </section>
  );
}
