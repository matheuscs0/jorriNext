'use client'
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/Buttons/DefaultButton';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/hooks/formatPrice/formatPrice';
import { TableOrders } from '@/components/TableOrders';
import { TableOrdersMobile } from '@/components/TableOrdersMobile';

export default function ProfilePage() {
  const { data: session } = useSession();
  const { push } = useRouter()

  const signOutButton = () => {
      push('/login')
      signOut()
  }

  const updateBackendUserAndPurchase = async () => {
    try {
      if (session?.user) {
        const response = await fetch('http://localhost:3003/api/addUser', {
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
        <div className='w-full flex justify-center items-center'>
          <h1 className='text-4xl'>Olá, {session?.user?.name}</h1>
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
       <div className='w-full justify-center items-center mt-10'>
          <div className='w-80'>
            <Button bg='bg-black' colorText='text-white' onClick={() => signOutButton()}>Sair</Button>
          </div>
       </div>
      </div>
    </div>
  );
}
