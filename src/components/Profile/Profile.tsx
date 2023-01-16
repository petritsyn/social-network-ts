import React from 'react';
import Content from "./Content/Content";
import s from './Profile.module.css';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.profile}>
            <Content profile={props.profile}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;