import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;