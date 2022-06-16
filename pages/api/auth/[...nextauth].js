import NextAuth from "next-auth"
import GoogleProviders from "next-auth/providers/google"
import { FirebaseAdapter} from "@next-auth/firebase-adapter";
import { db } from "../../../firebase";
import * as firestoreFunctions from "firebase/firestore";


export default NextAuth({
  // Configure one or more authentication providers
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization:{
                params:{
                    prompt: "consent",
                    access_type:"offline",
                    response_type:"code"
                }
            }
        }),
        // ...add more providers here
        
    ],
    

    

    session: {
        strategy: 'jwt',
    },
    
    pages:{
        signIn:"/auth/signin",
        error:"/auth/signin",
    },

    secret: process.env.SECRET,
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
            token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            session.user.username = session.user.name
                .split(" ")
                .join("")
                .toLocaleLowerCase();
            session.user.uid = token.sub;
            
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        }
    }
    
})
