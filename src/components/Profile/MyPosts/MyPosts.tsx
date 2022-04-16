import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = () => {

    let postData: Array<PostDataType> = [
        {id: 1, message: 'First post', likesCount: 5},
        {id: 1, message: 'Second post', likesCount: 7}
    ]

    return (
        <div className={s.myPosts}>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>
    )
}

export default MyPosts;