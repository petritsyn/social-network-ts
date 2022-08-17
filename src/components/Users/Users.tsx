import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/userPhoto.png";
import {UserType} from "../../redux/users-reducer";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    currentPage: number
    onPageChangedHandler: (el: number) => void
    onClickButtonUnFollowHandler: (id: number) => void
    onClickButtonFollowHandler: (id: number) => void
    isFetching: boolean
}

const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {props.isFetching && <div><Preloader/></div>}
        <div>
            {
                pages.map((el, index) => <span key={index} onClick={() => props.onPageChangedHandler(el)}
                                               className={props.currentPage === el ? s.selectedPage : ''}>{el}</span>)
            }
        </div>
        {props.users.map(el => <div key={el.id} className={s.userItem}>
            <div>
                <NavLink to={'/profile/' + el.id}>
                    <div>{<img
                        src={el.photos.small ? el.photos.small : userPhoto}
                        className={s.userPhoto}/>}
                    </div>
                </NavLink>
                <div>

                    {el.followed
                        ? <button onClick={() => props.onClickButtonUnFollowHandler(el.id)}>Unfollow</button>
                        : <button onClick={() => props.onClickButtonFollowHandler(el.id)}>Follow</button>}
                </div>
            </div>
            <div>
                <div>{el.name}</div>
                <div>{el.status}</div>
            </div>
        </div>)}
    </div>
};

export default Users;