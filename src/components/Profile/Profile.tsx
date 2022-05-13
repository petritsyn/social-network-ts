import React from 'react';
import Content from "./Content/Content";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import {PostType} from "../../state/state";

type ProfilePropsType = {
    posts: Array<PostType>
    addPost: (postTest: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <Content/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;