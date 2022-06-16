import React from 'react';
import Content from "./Content/Content";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import {ActionsTypes, PostType} from "../../redux/store";

type ProfilePropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <Content/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch} />
        </div>
    );
};

export default Profile;