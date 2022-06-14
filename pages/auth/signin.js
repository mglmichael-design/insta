import { useSession, signIn, signOut } from "next-auth/react";

// browser side,
export default function SignIn() {
    const {data: session} = useSession();
    console.log(session);
    
    return (
        <div className="">
            <h1>{session ? "{session.email} is here" : "No one is Here"}</h1>
            {session ? <button onClick={()=> signOut("")}>Logout</button>:<button onClick={()=> signIn("google")}>Login</button>}
        </div>
    );
}

