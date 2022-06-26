import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: Array<PostType>
    onPostChange: (newPostText: string) => void
    newPostText: string
    addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    const addPostHandler = () => {
        props.addPost();
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return (
        <div className={s.myPosts}>
            <div><textarea onChange={onPostChangeHandler} value={props.newPostText}/></div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;