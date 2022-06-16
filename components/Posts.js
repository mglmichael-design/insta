import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import Post from './Post';
import { db } from '../firebase';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                (snapshot) =>{
                    setPosts(snapshot.docs);
                }
            ),
        [db]
    );

    console.log('Here are your posts...', posts);
    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    id={post.id}
                    img={post.data().image}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    caption={post.data().caption}
                />
            ))}
        
        </div>
    );
}

export default Posts;
