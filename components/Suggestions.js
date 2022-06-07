import faker from 'faker';
import React from 'react';
import { useState, useEffect } from 'react';

function Suggestions() {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() =>{
        const suggestions =[...Array(8)].map((_,i)=>(
            {
                ...faker.helpers.contextualCard(),
                id:i,
            }
        ))
        setSuggestions(suggestions);
    },[])
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you!</h3>
                <button className="text-gray-600 font-bold">See All</button>
            </div>
            {
                suggestions.map((profile)=>(
                    <div
                        key={profile.id}
                        className="flex items-center justify-between mt-3"
                    >
                        <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/121256714_1102627486867662_3053136786439458049_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PgMxtBaD-ygAX8Ok8DD&_nc_ht=scontent-sea1-1.xx&oh=00_AT9gSK2RW_ToYyfzTv4IfT1Zeo1QAbBw3w9A3KQwYd2g8w&oe=62BBEC02" 
                            alt={profile.avatar} 
                            className="w-10 h-10 rounded-full border p-[2px]  cursor-pointer hover:scale-125 transition-all  duration-150 ease-in-out" 
                        />
                        <div className="flex-1 ml-4">
                            <h2 className="font-bold text-sm">{profile.username}</h2>
                            <h3 className="text-xs text-gray-400">Follows - {profile.company.name}</h3>
                        </div>
                        <button className="font-bold text-blue-400 ml-1 text-sm">Follow</button>
                    </div>
                ))
            }
            <p className="pt-10 text-xs text-gray-400">
                About • Help • Press • API • Jobs • Privacy • Terms • Locations	• Language
            </p>
            <p className="pt-5 text-xs text-gray-400">@2022 INSTAGRAM FROM MIKE CLONE</p>
        </div>
    );
}

export default Suggestions;
