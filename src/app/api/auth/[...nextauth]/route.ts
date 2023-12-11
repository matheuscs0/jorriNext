import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const OPTIONS: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: "750408216884-ouuigjmplgmbnst855fptr8cuhphfm1n.apps.googleusercontent.com",
            clientSecret:"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",
        }) ,
    ],
    pages: {
        signIn: '/profile'
    }
}

const handler = NextAuth(OPTIONS)

export { handler as GET, handler as POST }
