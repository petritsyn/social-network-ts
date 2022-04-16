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
        {id: 2, message: 'Second post', likesCount: 7}
    ];

    const postElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.myPosts}>
            {postElements}
        </div>
    )
}

export default MyPosts;