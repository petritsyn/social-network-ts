import React from 'react';
import Content from "./Content/Content";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';
import {PostType} from "../../state/state";

type ProfilePropsType = {
    posts: Array<PostType>
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