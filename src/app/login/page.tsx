'use client'
import { Login } from "@/components/Login"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function ProfilePage(){
    const {data: session} = useSession()
    const { push } = useRouter()
    console.log(session)
    
      if (session) {
        push('/profile');
      }
    
      return (
        <div className="w-full h-screen flex-col">
          <div className="w-full flex justify-center h-full mt-10">
            <Login />
          </div>
        </div>
      );
    }