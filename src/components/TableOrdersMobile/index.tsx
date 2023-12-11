import { formatDate, formatPrice } from "@/hooks/formatPrice/formatPrice";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const TableOrdersMobile = () => {
    const { data: session } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const email = session?.user?.email
  const [open, setOpen] = useState(true);

  type Purchase = {
    _id: string;
    product: string[];
    address: string;
    cep: string;
    city: string;
    complemento: string;      
    cpf: string;
    date: string;
    email: string;
    itemId: number[]; // ou string[], dependendo do tipo real dos seus IDs
    number: string;
    price: number ; // ou string, dependendo do tipo real do preço
    purchaseId: string;
    state: string;
  };
  
  type UserData = {
    _id: string;
    email: string;
    image: string;
    purchases: Purchase[];
  };

  const getUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3003/api/getUser/${email}`);
      if (response.ok) {
        const userData = await response.json();
        console.log('Dados do usuário:', userData);
        setUserData(userData);
      } else {
        console.error('Falha ao obter dados do usuário do backend');
      }
    } catch (error) {
      console.error('Erro ao fazer solicitação para obter dados do usuário do backend', error);
    }
  };

  useEffect(() => {
    getUserData()
  }, [])

    return(
        <>
        <div className="flex-col-reverse">
        {userData?.purchases.map((purchase) => (
        <div className={`w-[350px]  ${open ? '' : 'h-28'}flex justify-center p-6 bg-zinc-100 mb-10 flex-col rounded-md shadow-md duration-500 transition-all`} key={purchase._id}>  
            <div className="w-full flex justify-center">
                <h1>{purchase.product}</h1>
            </div>
            <div className="w-full flex justify-around mt-3">
                <div className="flex-col w-1/2 gap-2">
                    <p className="text-md font-bold">Nº Pedido:</p>
                    <p className="text-xs">{purchase.purchaseId}</p>
                </div>
                <div>
                    <p className="text-md font-bold ">{formatPrice(purchase.price)}</p>
                </div>
            </div>
            <div className={`${open ? 'hidden' : 'flex flex-col justify-center items-center mt-10 text-center'} w-full  `}>
                <p>{formatDate(purchase.date)}</p>
                <p>{purchase.address},{purchase.city}, {purchase.state}, {purchase.complemento}, {purchase.number}, -{purchase.cep}</p>
            </div>
            <div className={`${open ? 'flex w-full justify-center items-center mt-5' : 'hidden'} `}>
                <button onClick={() => setOpen(false)}>Ver detalhes</button>
            </div>
            <div className={`${open ? 'hidden' : 'flex w-full justify-center items-center mt-5'}`}>
                <button onClick={() => setOpen(true)}>Esconder detalhes</button>
            </div>
        </div>
        ))}
        </div>
        </>
    )
}