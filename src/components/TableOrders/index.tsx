import { formatDate, formatPrice } from "@/hooks/formatPrice/formatPrice";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const TableOrders = () => {
    const { data: session } = useSession();
  const [userData, setUserData] = useState<UserData | null>(null);
  const email = session?.user?.email

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
      const response = await fetch(`https://mongodb-jorri-next-production.up.railway.app//api/getUser/${email}`);
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
        <div className="overflow-x-auto">
  <table className="min-w-[500px] bg-white border border-gray-300 rounded-md shadow-md">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b border-r">Número do Pedido</th>
        <th className="py-2 px-4 border-b border-r">Pedido</th>
        <th className="py-2 px-4 border-b border-r">Data</th>
        <th className="py-2 px-4 border-b border-r">Valor</th>
        <th className="py-2 px-4 border-b border-r">Endereço</th>
      </tr>
    </thead>
    <tbody>
      {userData?.purchases.map((purchase) => (
        <tr key={purchase.purchaseId} className="border-b">
          <td className="py-4 px-4 border-r">{purchase.purchaseId}</td>
          <td className="py-4 px-4 border-r">{purchase.product}</td>
          <td className="py-4 px-4 border-r">{formatDate(purchase.date)}</td>
          <td className="py-4 px-4 border-r">{formatPrice(purchase.price)}</td>
          <td className="py-4 px-4 border-r">{purchase.address}, {purchase.city}, {purchase.state} {purchase.cep}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    )
}