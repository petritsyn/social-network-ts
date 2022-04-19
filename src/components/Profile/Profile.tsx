import React from 'react';
import Content from "./Content/Content";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import {PostDataType} from "../../index";

type ProfilePropsType = {
    posts: Array<PostDataType>
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profile}>
            <Content/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;