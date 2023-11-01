import KeycloakProvider from 'next-auth/providers/keycloak';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          credentials?.username === 'vitor' &&
          credentials?.password === '123456'
        ) {
          const user = {
            id: '1',
            name: 'Vitor Alencar',
            email: 'vitor@alencar.com',
            profile_type: 'adult',
          };

          return user;
        }

        if (
          credentials?.username === 'baby' &&
          credentials?.password === '123456'
        ) {
          const user = {
            id: '1',
            name: 'baby Smith',
            email: 'baby@gmail.com',
            profile_type: 'kids',
          };

          return user;
        }

        return null;
      },
    }),

    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID!,
      issuer: process.env.KEYCLOAK_ISSUER_URL!,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      session.user = token;
      return session;
    },
  },
};
