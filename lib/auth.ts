// Option 1: Using Google login

// @/lib/auth.ts
// import GoogleProvider from 'next-auth/providers/google'; // or credentials-based if needed
// import { NextAuthOptions } from 'next-auth';

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     // You can also add a CredentialsProvider here if preferred
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       // You can assign a custom role here
//       if (session?.user?.email === process.env.ADMIN_EMAIL) {
//         session.user.role = 'admin';
//       } else {
//         session.user.role = 'guest';
//       }
//       return session;
//     },
//   },
// };

// Option 2: Using credentials-based login
// @/lib/auth.ts
// import CredentialsProvider from "next-auth/providers/credentials";
// import { NextAuthOptions } from "next-auth";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         console.log("Received:", credentials);
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };

//         // For now, use a hardcoded admin (can later fetch from MongoDB)
//         if (
//           email === process.env.ADMIN_EMAIL &&
//           password === process.env.ADMIN_PASSWORD
//         ) {
//           return {
//             id: "1",
//             name: "Admin",
//             email,
//             role: "admin",
//           };
//         }

//         return null; // Invalid credentials
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       if (token?.role) {
//         session.user.role = token.role;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = (user as any).role;
//       }
//       return token;
//     },
//   },
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/auth/login",
//   },
// };

// lib/auth.ts
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Received credentials:", credentials);
        console.log("Expected EMAIL:", process.env.ADMIN_EMAIL);
        console.log("Expected PASSWORD:", process.env.ADMIN_PASSWORD);
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (
          credentials?.email === adminEmail &&
          credentials?.password === adminPassword
        ) {
          return {
            id: "admin-id",
            name: "Admin",
            email: adminEmail,
            role: "admin", // 👈 important for /admin/blog/new
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token?.role) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error", // You can create this if you want
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
