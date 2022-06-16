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
import {useSession} from "next-auth/react"
import {useState, useEffect} from 'react';
import { addDoc, serverTimestamp, collection, onSnapshot, query, orderBy, setDoc, doc, deleteDoc } from 'firebase/firestore';
import {db} from '../firebase';
import Moment from 'react-moment';

function Post({id,username, userImg, img, caption}) {
    const {data: session} = useSession();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);

    // Commenting functionality
    // use useEffect to access your db 
    useEffect(
        () => 
            onSnapshot(
                query(
                    collection(db, 'posts', id, 'comments'),
                    orderBy('timestamp', 'desc')
                ),
                (snapshot ) => setComments(snapshot.docs)
            ),
        [db, id]
    );
    
    // sending a comment to the db
    const sendComment = async (e) =>{
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'),{
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }
    // Likes Functionality
    // same thing as comments
    useEffect(
        () =>
            onSnapshot(
                collection(db, 'posts', id, 'likes'),
                    (snapshot) => 
                        setLikes(snapshot.docs)
            ),
        [db, id]
    );
    // User can only like a post once
    useEffect(
        () =>
            setLiked(
                likes.findIndex(
                    (like) => like.id === session?.user?.uid) !== -1
            ),
        [likes]
    );

    const likePost = async (e) =>{
        e.preventDefault();

        if(liked){
            await deleteDoc(doc(db,'posts', id, 'likes', session.user.uid));
        }else{
            await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
            username: session.user.username,
            });
        }
    };
    console.log(liked);
    


    return (
        <div className="bg-white my-7 border rounded-sm">
            {/*Header*/}
            <div className="flex items-center p-5">
                <img src={userImg} alt="img" className="h-12 w-12 rounded-full object-contain border p-1 mr-3" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5"/>

            </div>
            {/*Img*/}
            <img src={img} className="object-cover w-full" alt="img-content" />

            {/*buttons*/}
            {session ? 
            <div className=" flex justify-between px-4 pt-4">
                <div className="flex space-x-4 ">
                    {liked ? 
                        (
                            <HeartIconFilled onClick={likePost} className="btn text-red-500"/>
                        ): (
                            <HeartIcon onClick={likePost} className="btn"/>
                        )
                        
                    }
                    
                    
                    <ChatIcon className="btn"/>
                    <PaperAirplaneIcon className="btn rotate-45"/>
                </div>
                <BookmarkIcon className='btn'/>
            </div>
            : 
            null
            }
            

            {/*caption*/}
            <div>
                
                <p className="p-5 truncate">
                    {likes.length > 0 && (
                        <p className="font-bold mb-1">{likes.length} likes </p>
                    )}
                    <span className="font-bold mr-1">{username} </span>
                    {caption}
                </p>
            </div>

            {/*comments*/}
            {comments.length > 0 && (
                <div className='ml-7 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
                    {comments.map(comment =>(
                        <div key={comment.id} className="flex items-center space-x-2 mb-3">
                            <img 
                                src={comment.data().userImage}
                                alt='user image'
                                className="h-7 w-7 rounded-full cursor-pointer hover:scale-125 transition-all  duration-150 ease-in-out"
                            />
                            <p className="font-bold">{comment.data().username}</p>
                            <p className='text-sm flex-1'>{comment.data().comment}</p>
                            <Moment fromNow className="pr-5 text-sm">
                                {comment.data().timestamp?.toDate()}
                            </Moment>

                        </div>
                    ))}
                </div>
            )}
            
            {/*input box*/}
            {session && (
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7"/>
                    <input  
                        type="text"
                        className="border-none flex-1 focus:ring-0 outline-none"
                        placeholder="Click to add a comment..."
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <button 
                        type='submit'
                        disabled={!comment.trim()}
                        onClick={sendComment}
                        className="font-bold text-blue-400"
                    >
                        Post
                    </button>
                </form>
            )}
            
        </div>
    );
}

export default Post;
