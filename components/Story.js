import React from 'react';

function Story(props) {
    return (
        <div>
            <img 
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-125 transition-all  duration-50 ease-in-out"
                src={props.img} alt={props.username}/>
            <p className='text-sm w-14 truncate text-center'>{props.username}</p>
        </div>
    );
}

export default Story;
