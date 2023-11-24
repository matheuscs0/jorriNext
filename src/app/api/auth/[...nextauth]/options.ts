import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider  from "next-auth/providers/credentials";

 export const options: NextAuthOptions ={
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID
        }),
        //CredentialsProvider({
            //credentials: {
            //email: {label: "email", type: "emiail", placeholder: "your best email"},
            //password: {label: "password", type: "password"}
            //},
            //async authorize(credentials, req){      
           // }
        //})
    ],
    pages: {
        signIn: '/login',
    }
 }