import React from 'react';
import Post from './Post';

const posts = [
    {
        id:'123',
        username:'simple.mikey.main',
        userImg:'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/121256714_1102627486867662_3053136786439458049_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PgMxtBaD-ygAX8Ok8DD&_nc_ht=scontent-sea1-1.xx&oh=00_AT9gSK2RW_ToYyfzTv4IfT1Zeo1QAbBw3w9A3KQwYd2g8w&oe=62BBEC02',
        img:'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/121256714_1102627486867662_3053136786439458049_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PgMxtBaD-ygAX8Ok8DD&_nc_ht=scontent-sea1-1.xx&oh=00_AT9gSK2RW_ToYyfzTv4IfT1Zeo1QAbBw3w9A3KQwYd2g8w&oe=62BBEC02',
        caption:'EDC was lit!',
    },
    {
        id:'124',
        username:'simple.mikey.main',
        userImg:'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/121256714_1102627486867662_3053136786439458049_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PgMxtBaD-ygAX8Ok8DD&_nc_ht=scontent-sea1-1.xx&oh=00_AT9gSK2RW_ToYyfzTv4IfT1Zeo1QAbBw3w9A3KQwYd2g8w&oe=62BBEC02',
        img:'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/121256714_1102627486867662_3053136786439458049_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PgMxtBaD-ygAX8Ok8DD&_nc_ht=scontent-sea1-1.xx&oh=00_AT9gSK2RW_ToYyfzTv4IfT1Zeo1QAbBw3w9A3KQwYd2g8w&oe=62BBEC02',
        caption:'EDC was lit!',
    },

];

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.user}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        
        </div>
    );
}

export default Posts;
