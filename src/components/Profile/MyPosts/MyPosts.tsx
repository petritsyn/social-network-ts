import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPost, PostType} from "../../../state/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postTest: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (postMessageRef.current) {
            addPost(postMessageRef.current.value)
            console.log(props.posts)
        }
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value;
    }

    return (
        <div className={s.myPosts} >
            <div><textarea ref={postMessageRef} onChange={onPostChangeHandler}/></div>
            <div><button onClick={addPostHandler}>Add post</button></div>
            {postElements}
        </div>
    )
}

export default MyPosts;