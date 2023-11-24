'use client'
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider(props){
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {props.children}
    </AuthContext.Provider>

  )
}

export function useAuth(){
  return useContext(AuthContext)
}