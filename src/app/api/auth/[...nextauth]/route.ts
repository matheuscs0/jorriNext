import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const OPTIONS: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId:  `${process.env.GOOGLE_CLIENT_ID}`,
            clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
            
        }) ,
    ],
    pages: {
        signIn: '/profile'
    }
}

const handler = NextAuth(OPTIONS)

export { handler as GET, handler as POST }
