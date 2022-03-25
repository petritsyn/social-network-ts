import React from 'react';
import Content from "./Content/Content";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <Content/>
            <MyPosts/>
        </div>
    );
};

export default Profile;