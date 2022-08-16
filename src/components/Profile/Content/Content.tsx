import React from 'react';
import s from './Content.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../Preloader/Preloader";

type PropsType = {
    profile: ProfileType | null
}

const Content = (props: PropsType) => {
    if (!props.profile) return <div><Preloader/></div>
    return (
        <div className={s.content}>
            <div className={s.description}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
        </div>
    )
}

export default Content;