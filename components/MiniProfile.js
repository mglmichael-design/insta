import React from 'react';
import { useSession, signIn, signOut} from 'next-auth/react';

function MiniProfile() {
    const {data: session} = useSession();
    console.log(session);
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src={session?.user?.image}
                alt="mini-profile-pic"
                className="w-16 h-16 rounded-full border p-[2px]  cursor-pointer hover:scale-125 transition-all  duration-150 ease-in-out" 
            />
            <div className='flex-1  mx-4'>
                <h2 className="font-bold">{session?.user?.username}</h2>
                <h3 className="text-sm text-gray-400 ">{session?.user?.name}</h3>
            </div>
            <button onClick={signOut} className="text-blue-400 text-md font-bold ">Sign Out</button>
        </div>
    );
}

export default MiniProfile;
