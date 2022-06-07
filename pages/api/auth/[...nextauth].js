import NextAuth from "next-auth"
import GoogleProviders from "next-auth/providers/google"
import { FirebaseAdapter} from "@next-auth/firebase-adapter";
import { db } from "../../../firebase";
import * as FirestoreFunctions from "firebase/firestore-functions";


export default NextAuth({
  // Configure one or more authentication providers
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
        
    ],
    adapter: FirebaseAdapter(db),
    
    pages:{
        signIn:"/auth/signin",
    }
})
