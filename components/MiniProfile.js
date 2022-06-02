import React from 'react';

function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/121256714_1102627486867662_3053136786439458049_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PgMxtBaD-ygAX8Ok8DD&_nc_ht=scontent-sea1-1.xx&oh=00_AT9gSK2RW_ToYyfzTv4IfT1Zeo1QAbBw3w9A3KQwYd2g8w&oe=62BBEC02"
                alt="mini-profile-pic"
                className="w-16 h-16 rounded-full border p-[2px]  cursor-pointer hover:scale-125 transition-all  duration-150 ease-in-out" 
            />
            <div className='flex-1  mx-4'>
                <h2 className="font-bold">Simple.mikey.main</h2>
                <h3 className="text-sm text-gray-400 ">Mike E</h3>
            </div>
            <button className="text-blue-400 text-md font-bold ">Sign Out</button>
        </div>
    );
}

export default MiniProfile;
