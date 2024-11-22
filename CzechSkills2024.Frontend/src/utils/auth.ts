import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs-react";
import { NextAuthOptions } from "next-auth";
import axios from "axios";
import { postLogin } from "./fetchers";

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

          const res = await postLogin({
            username: credentials.username,
            password: credentials.password,
          });

          const user = res.data;

          // const passwordMatch = bcrypt.compareSync(
          //   credentials.password,
          //   user.password
          // );
          // await bcrypt.hashSync(password, bcrypt.genSaltSync(10));

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
  // callbacks: {
  //   jwt({
  //     token,
  //     user,
  //     account,
  //   }: {
  //     token: any;
  //     user: any;
  //     account: Account | null;
  //   }) {
  //     const userSession = user as SessionUser;

  //     if (user) {
  //       token.memberId = userSession.memberId;
  //       token.username = userSession.username;
  //       token.fullName = userSession.fullName;
  //     }

  //     if (account && account.access_token) {
  //       token.accessToken = account.access_token; // Save access_token in token object
  //     }

  //     return token;
  //   },
  //   session({ session, token }: { session: any; token: any }) {
  //     session.user.memberId = token?.memberId;
  //     session.user.username = token?.username;
  //     session.user.fullName = token?.fullName;
  //     session.user.accessToken = token?.accessToken;
  //     return session;
  //   },
  // },
};

export default NextAuth(authOptions);
