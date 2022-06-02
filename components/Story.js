import React from 'react';

function Story(props) {
    return (
        <div>
            <img 
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-125 transition-all  duration-50 ease-in-out"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/121256714_1102627486867662_3053136786439458049_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PgMxtBaD-ygAX8Ok8DD&_nc_ht=scontent-sea1-1.xx&oh=00_AT9gSK2RW_ToYyfzTv4IfT1Zeo1QAbBw3w9A3KQwYd2g8w&oe=62BBEC02" alt={props.username}/>
            <p className='text-sm w-14 truncate text-center'>{props.username}</p>
        </div>
    );
}

export default Story;
