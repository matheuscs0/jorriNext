import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const OPTIONS: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId:  `778504005240-p0oineqk4ac7hpmcs2n2vdntau1430la.apps.googleusercontent.com`,
            clientSecret: `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`,
            
        }) ,
    ],
    pages: {
        signIn: '/profile'
    }
}

const handler = NextAuth(OPTIONS)

export { handler as GET, handler as POST }
