import NextAuth from 'next-auth';
import { authConfig } from '@/configs/authConfigs';

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
