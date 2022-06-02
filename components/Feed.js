import React from 'react';
import Stories from './Stories';
import Posts from './Posts.js'
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions.js';


function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl 
        xl:grid-cols-3 xl:max-w-6xl mx-auto">
            {/* Section */}
            <section className='col-span-2'>
                {/* Stories */}
                <Stories/>
                {/*Posts */}
                <Posts/>

            </section>
                
            <section className="hidden xl:inline-grid md:col-span-1">
            {/*Section*/}
                <div className='fixed top-20'>
                    {/*Mini Profile */}
                    <MiniProfile/>
                    {/*Suggestions */}
                    <Suggestions/>
                </div>

            </section>

        </main>
    )
}

export default Feed
