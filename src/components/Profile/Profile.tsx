import React from 'react';
import Content from "./Content/Content";
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ActionsTypes, PostType} from '../../redux/profile-reducer';

type ProfilePropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <Content/>
            <MyPostsContainer posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch} />
        </div>
    );
};

export default Profile;