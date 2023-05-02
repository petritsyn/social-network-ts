import React from 'react';
import s from "components/Users/User/User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "assets/img/userPhoto.png";
import {UserType} from "redux/users-reducer";

type PropsType = {
    users: UserType[]
    followingInProgress: number[]
    onClickButtonUnFollowHandler: (id: number) => void
    onClickButtonFollowHandler: (id: number) => void
    user: UserType
}

export const User = (props: PropsType) => {
    return (
        <div className={s.userItem}>
            <div>
                <NavLink to={'/profile/' + props.user.id}>
                    <div>{<img
                        src={props.user.photos.small ? props.user.photos.small : userPhoto}
                        className={s.userPhoto}/>}
                    </div>
                </NavLink>
                <div>

                    {props.user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                            props.onClickButtonUnFollowHandler(props.user.id)
                        }
                        }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => props.onClickButtonFollowHandler(props.user.id)}>Follow</button>}
                </div>
            </div>
            <div>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </div>
        </div>
    );
};