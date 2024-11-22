import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs-react";
import { Account, NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
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
          console.log("here1");

          if (!credentials || !credentials.username || !credentials.password)
            return null;
          console.log("here2");

          const res = await postLogin({
            email: credentials.username,
            password: credentials.password,
          });
          console.log("here3");
          console.log(res);

          const user = res.data;

          // const passwordMatch = bcrypt.compareSync(
          //   credentials.password,
          //   user.password
          // );
          // await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
          console.log(user);

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
