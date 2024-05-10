import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from "../../../../lib/mongodb";
const crypto = require('crypto');


const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};



const handler = NextAuth({
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET, 
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'google') {
        const { name, email } = user;
        try { 
          const client = await clientPromise;
          const dab = client.db("universe-tech");
          const rq = await dab.collection("users").findOne({ email });
          if (!rq) {
            const password = await generateSecretKey();
            const method = "google";
            const res = await fetch("http://localhost:3000/api/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                method,
                name,
                email,
                password
              }),
            });
            if (res.ok) {
              return user
            }
          }
          else {
            return user
          }
        }
        catch (error) {
          console.log(error)
        }
        return user
      }
    }
  }
});
export { handler as GET, handler as POST }


