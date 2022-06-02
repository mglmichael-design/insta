import React from 'react';
import faker from 'faker';
import {useEffect, useState} from 'react';
import Story from './Story';

function Stories() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const suggestions =[...Array(20)].map((_, i)=>({
            ...faker.helpers.contextualCard(),
            id:i,
        })
        );
        console.log(suggestions)
        setUsers(suggestions);
    }, []);
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {users.map(profile =>(
            <Story key={profile.id} img={profile.avatar} username={profile.username}/>
        ))}
        
        </div>
    );
}

export default Stories;
