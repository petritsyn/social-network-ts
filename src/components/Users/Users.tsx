import React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css';

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: PropsType) => {

    // const users = [
    //     {id: 1, userPhoto: 'https://proza.ru/pics/2010/04/27/810.jpg', name: 'Andrew', status: 'status', followed: true},
    //     {id: 2, userPhoto: 'https://proza.ru/pics/2010/04/27/810.jpg', name: 'Anna', status: 'hey', followed: false},
    //     {id: 3, userPhoto: 'https://proza.ru/pics/2010/04/27/810.jpg', name: 'Sergey', status: 'hello', followed: true},
    // ];
    //
    // if (props.users.length === 0) {
    //     props.setUsers(users)
    // }

    const axios = require('axios').default;
    if (props.users.length === 3) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: any) => {
            props.setUsers(response.data.items)
        })
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
                    <div>{<img src={el.photos.small ? el.photos.small : 'https://avatars.mds.yandex.net/i?id=aa9dd9300ba5610081e9f1bf3f46c02c-5474802-images-thumbs&n=13'} className={s.userPhoto}/>}</div>
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