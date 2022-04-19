import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostDataType} from "../../../index";

type MyPostsPropsType = {
    posts: Array<PostDataType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.myPosts}>
            {postElements}
        </div>
    )
}

export default MyPosts;