import NextAuth, { User as NextUser, Account, AuthOptions, Profile } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient } from '@prisma/client'
import {User} from '../../../../types/User'
import { CredentialInput } from 'next-auth/providers/credentials';
import { AdapterUser} from 'next-auth/adapters';

const prisma = new PrismaClient()

interface CallbackData {
    user: AdapterUser | NextUser,
    account: Account | null,
    profile?: Profile | undefined,
}

export const authOptions: AuthOptions = {
    debug: true,
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        }),
    ],
    secret: process.env.AUTH_SECRET,
    callbacks: {   
        signIn: async ({ user, account, profile }: CallbackData): Promise<string> => {
            console.log(account, user, profile)
            if (!profile?.email){
                throw new Error('No Profile')
            }
            await prisma.user.upsert ({
                where: {
                    email: profile.email
                }, 
                create: {
                    email: profile.email as string,
                    name: profile.name as string,
                },
                update: {
                    name: profile.name
                }
            })
            return profile.email
        },
    },
    
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
