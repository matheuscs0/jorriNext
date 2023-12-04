
'use client'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { data: session } = useSession();

  const updateBackendUserAndPurchase = async () => {
    try {
      if (session?.user) {
        const response = await fetch('http://localhost:3003/api/updateUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: session.user,
          }),
        });
  
        if (response.ok) {
          console.log('Usuário atualizado com sucesso no backend');
        } else {
          console.error('Falha ao atualizar usuário no backend');
        }
      } else {
        console.error('Objeto de usuário na sessão é undefined');
      }
    } catch (error) {
      console.error('Erro ao fazer solicitação para atualizar usuário no backend', error);
    }
  };
  

  useEffect(() => {
    updateBackendUserAndPurchase()
  }, [])

  return (
    <div className="w-full h-screen flex-col">
      <div className="w-full flex justify-center h-full mt-10">
        <h1>Olá, {session?.user?.name}</h1>
      </div>
    </div>
  );
}
