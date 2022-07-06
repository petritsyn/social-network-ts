import React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css'

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: PropsType) => {

    const users = [
        {id: 1, userPhoto: 'https://proza.ru/pics/2010/04/27/810.jpg', name: 'Andrew', status: 'status', followed: true},
        {id: 2, userPhoto: 'https://proza.ru/pics/2010/04/27/810.jpg', name: 'Anna', status: 'hey', followed: false},
        {id: 3, userPhoto: 'https://proza.ru/pics/2010/04/27/810.jpg', name: 'Sergey', status: 'hello', followed: true},
    ];

    if (props.users.length === 0) {
        props.setUsers(users)
    }

    const onClickButtonFollowHandler = (userId: number) => {
        props.follow(userId)
    }

    const onClickButtonUnFollowHandler = (userId: number) => {
        props.unFollow(userId)
    }

    return (
        <div>
            {props.users.map(el => <div key={el.id} className={s.userItem}>
                <div>
                    <div>{<img src={el.userPhoto} className={s.userPhoto}/>}</div>
                    <div>
                        {el.followed
                            ? <button onClick={() => onClickButtonUnFollowHandler(el.id)}>Unfollow</button>
                            : <button onClick={() => onClickButtonFollowHandler(el.id)}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>{el.name}</div>
                    <div>{el.status}</div>
                </div>
            </div>)}
        </div>
    );
};