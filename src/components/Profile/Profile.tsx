import React from 'react';
import Content from "./Content/Content";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={s.profile}>
            <Content/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;