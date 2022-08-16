import React from 'react';
import Content from "./Content/Content";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: ProfileType | null
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.profile}>
            <Content profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;