import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from "next-auth/providers/github";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";

export const AuthOptions: NextAuthOptions = {
    // adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!, //<--string
            clientSecret: process.env.GITHUB_SECRET!,  //<--string
        })
    ],
}


const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST}