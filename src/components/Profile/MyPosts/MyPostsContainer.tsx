import React from 'react';
import {addPostAC, updateNewPostTextAC, ActionsTypes, PostType} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsPropsType) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = (newPostText: string) => {
        props.dispatch(updateNewPostTextAC(newPostText))
    }

    return (
        <MyPosts
            posts={props.posts}
            onPostChange={onPostChange}
            newPostText={props.newPostText}
            addPost={addPost}
        />
    )
}

export default MyPostsContainer;