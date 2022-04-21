import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../state/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let postMessageRef = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        alert(postMessageRef.current?.value)
    }

    return (
        <div className={s.myPosts} >
            <div><textarea ref={postMessageRef}/></div>
            <div><button onClick={addPostHandler}>Add post</button></div>
            {postElements}
        </div>
    )
}

export default MyPosts;