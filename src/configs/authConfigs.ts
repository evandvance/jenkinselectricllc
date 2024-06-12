import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient, Users } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const authConfig = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'johndoe@email.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req): Promise<Users | any> {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.users.findUnique({
          where: {
            email: credentials?.email,
          },
          select: {
            id: true,
            email: true,
            password: true,
            accessLevel: true,
          },
        });

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (passwordMatch) return user;
        return null;
      },
    }),
  ],
};
