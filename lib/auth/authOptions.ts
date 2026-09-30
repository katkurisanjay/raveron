// ─────────────────────────────────────────────────────────────────────────────
// AUTH OPTIONS
// DB-based authentication is disabled for Vercel static deployment.
// To re-enable: restore DATABASE_URL env var and uncomment the Prisma block.
// ─────────────────────────────────────────────────────────────────────────────

import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';

// import bcrypt from 'bcryptjs';
// import { db } from '@/lib/database/db';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // ── DB-BASED AUTH (disabled — uncomment when DB is connected) ──────────
        // const user = await db.adminUser.findUnique({
        //   where: { email: credentials.email.toLowerCase() },
        // });
        // if (!user) return null;
        // const valid = await bcrypt.compare(credentials.password, user.passwordHash);
        // if (!valid) return null;
        // return { id: user.id, email: user.email, name: user.name };
        // ─────────────────────────────────────────────────────────────────────

        // Temporary stub — returns null (login always fails) until DB is connected.
        return null;
      },
    }),
  ],
  session: { strategy: 'jwt', maxAge: 24 * 60 * 60 },
  pages: { signIn: '/admin/login', error: '/admin/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        (session.user as { id?: string }).id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
