import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, PostType, updateNewPostTextAC} from "../../../state/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)

    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (postMessageRef.current) {
            props.dispatch(addPostAC(postMessageRef.current.value))
            postMessageRef.current.value = '';
        }
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value;
        props.dispatch(updateNewPostTextAC(newPostText))
    }

    return (
        <div className={s.myPosts} >
            <div><textarea ref={postMessageRef} onChange={onPostChangeHandler} value={props.newPostText}/></div>
            <div><button onClick={addPostHandler}>Add post</button></div>
            {postElements}
        </div>
    )
}

export default MyPosts;