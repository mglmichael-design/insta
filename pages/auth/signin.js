import { useSession, signIn, signOut } from "next-auth/react";
import Header from "../../components/Header";

// browser side,
export default function SignIn() {
    const {data: session} = useSession();
    console.log(session);
    
    return (
        <div className="">
            <Header/>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
                <img
                    className="w-80"
                    src="https://links.papareact.com/ocw"/>
                <h4 className="font-xs italic">Welcome to Mike's Cloning of Instagram</h4>
                <p className="font-xs italic">Built for Educational Purposes Only!</p>
                <div className="mt-40">
                    {session ? 
                        <button onClick={()=> signOut("")}>Logout</button>
                        :
                        <button
                            className="p-3 bg-blue-500 rounded-lg text-white"
                            onClick={()=> signIn("google", {callbackUrl: '/'})}>Sign in with Google!</button>}
                </div>

            </div>
            
            
        </div>
    );
}

