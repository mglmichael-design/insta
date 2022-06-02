import React from 'react';
import { 
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon    
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({id,username, userImg, img, caption}) {
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/*Header*/}
            <div className="flex items-center p-5">
                <img src={img} alt="img" className="h-12 w-12 rounded-full object-contain border p-1 mr-3" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5"/>

            </div>
            {/*Img*/}
            <img src={img} className="object-cover w-full" alt="img-content" />

            {/*buttons*/}
            <div className=" flex justify-between px-4 pt-4">
                <div className="flex space-x-4 ">
                    <HeartIconFilled className="btn"/>
                    <ChatIcon className="btn"/>
                    <PaperAirplaneIcon className="btn rotate-45"/>
                </div>
                <BookmarkIcon className='btn'/>
            </div>
            

            {/*caption*/}
            <div>
                <p className="mx-3 mt-1">100 likes</p>
                <p className="p-5 truncate">
                    <span className="font-bold mr-1">{username} </span>
                    {caption}
                </p>
            </div>

            {/*comments*/}

            {/*input box*/}
            <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"/>
                <input type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment"/>
                <button className="font-bold text-blue-400">Post</button>
            </form>
        </div>
    );
}

export default Post;
