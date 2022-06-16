import React from 'react';
import Stories from './Stories';
import Posts from './Posts.js'
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions.js';
import { useSession, signIn, signOut } from "next-auth/react";


function Feed() {
    const {data: session} = useSession();
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
        xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3x;"}`}>
            {/* Section */}
            <section className='col-span-2'>
                {/* Stories */}
                <Stories/>
                {/*Posts */}
                <Posts/>

            </section>
            {session && (
                <section className="hidden xl:inline-grid md:col-span-1">
                {/*Section*/}
                    <div className='fixed top-20'>
                        {/*Mini Profile */}
                        <MiniProfile/>
                        {/*Suggestions */}

                        <Suggestions/>
                    </div>

                </section>
            )}
            

        </main>
    )
}

export default Feed
