
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
// import mysql from "mysql2/promise";
import db from './db';

// MySQL pool

 export  const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
try{

const { email, password } = credentials;

        // Fetch user from DB
        const [rows] = await db.execute(
          "SELECT user_id, email, password_hash FROM users WHERE email = ?",
          [email]
        );

        const user = rows[0];
        if (!user) return null;

        // Check password
        const isValid =  bcrypt.compare(password, user.password_hash);
        if (!isValid) return null;
        
        // Return user object for session
        return { id: user.user_id, email: user.email };
      }catch(error){
        alert('error logging in')
      }
      },
    }),
  ],
  pages:{
    signIn:'/dashboard',
    error:'/login?error=1',
    signOut:'/',

  },

  
  callbacks: {
  async redirect() {
    // THIS is where you tell NextAuth where to send the user
    return '/dashboard'; // after successful login
  },
    async jwt({ token, user }) {
      if (user) token.sub = user.id;
       return token;
    },
    async session({ session, token }) {
  
      session.user.id = token.sub;

      return session;
    },
  },
  session: { strategy: "jwt" },
});
