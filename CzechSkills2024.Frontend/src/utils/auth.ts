import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { Account, NextAuthOptions } from "next-auth";
import axios from "axios";
import { postLogin } from "./fetchers";
import { SessionUser } from "@/types/NextAuth.types";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        username: { label: "Username", type: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, request) {
        try {
          if (!credentials || !credentials.username || !credentials.password)
            return null;

          const passwordHash = await bcrypt.hash(credentials.password, 10);

          const res = await postLogin({
            username: credentials.username,
            password: passwordHash,
          });

          const user = res.data;

          return {
            id: user.userId,
            name: user.username,
          };
        } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log(error.message);
            return null;
          }

          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }: { token: any; user: any }) {
      const userSession = user as SessionUser;

      if (user) {
        token.userId = userSession.userId;
        token.username = userSession.username;
      }

      return token;
    },
    session({ session, token }: { session: any; token: any }) {
      session.user.userId = token?.userId;
      session.user.username = token?.username;
      return session;
    },
  },
};

export default NextAuth(authOptions);
