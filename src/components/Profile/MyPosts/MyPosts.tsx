import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <Post message={'First post'} likesCount={10}/>
            <Post message={'Second post'} likesCount={15}/>
        </div>
    )
}

export default MyPosts;