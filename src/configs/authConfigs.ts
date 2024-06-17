import CredentialsProvider from 'next-auth/providers/credentials';
import { Users } from '@prisma/client';
import bcrypt from 'bcrypt';
import PrismaWrapper from '@/helper/PrismaWrapper';

const prisma = PrismaWrapper;

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

        if (process.env.NODE_ENV === 'development')
          return { id: 1, email: credentials.email };

        const user = await prisma.users.findUnique({
          where: {
            email: credentials?.email,
          },
          select: {
            id: true,
            email: true,
            password: true,
          },
        });

        if (!user) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        const safeUser = { id: user.id, email: user.email };

        if (passwordMatch) return safeUser;
        return null;
      },
    }),
  ],
};
