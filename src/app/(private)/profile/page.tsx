'use client'
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/Buttons/DefaultButton';
import { useRouter } from 'next/navigation';
import { TableOrders } from '@/components/TableOrders';
import { TableOrdersMobile } from '@/components/TableOrdersMobile';

export default function ProfilePage() {
  const { data: session } = useSession();
  const  router  = useRouter()

  const signOutButton = () => {
      signOut()
      router.push('/')
  }

  const updateBackendUserAndPurchase = async () => {
    try {
      if (session?.user) {
        const response = await fetch('https://mongodb-jorri-next-production.up.railway.app/api/addUser', {
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
      <div className="w-full flex-col justify-center h-full mt-10">
        <div className='w-full flex justify-center items-center gap-2'>
          <div><h1 className='text-4xl'>Olá, {session?.user?.name}</h1></div>
          <div className='flex items-center'><button className='bg-black rounded text-white w-14' onClick={() => signOutButton()}>Sair</button></div>
        </div>
        <div className='w-full mt-10 flex justify-center flex-col items-center'>
          <h1 className='text-2xl mb-5'>Seus pedidos:</h1>
          <div className='hidden sm:flex'>
            <TableOrders/>
          </div>
          <div className='flex sm:hidden'>
              <TableOrdersMobile/>
          </div>
       </div>
      </div>
    </div>
  );
}
