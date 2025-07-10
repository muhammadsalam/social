import NextAuth from "next-auth";
import GitHub from 'next-auth/providers/github';
import {PrismaAdapter} from '@auth/prisma-adapter';
import { prisma } from "../../../prisma/prisma-client";

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [GitHub],
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
})