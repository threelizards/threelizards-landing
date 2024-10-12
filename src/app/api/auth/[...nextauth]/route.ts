import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvide from 'next-auth/providers/credentials';
import { routes } from '@/lib/routes';
import { ADMIN_PASSWORD, ADMIN_USER } from '@/lib/config';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvide({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) throw new Error('Credentials are required');
        const { username, password } = credentials;
        if (username === ADMIN_USER && password === ADMIN_PASSWORD) return { id: ADMIN_USER };
        throw new Error('invalid_credentials');
      }
    })
  ],
  pages: {
    signIn: routes.login
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
