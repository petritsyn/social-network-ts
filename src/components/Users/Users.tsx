import React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css';
import {default as axios} from "axios";
import userPhoto from '../../assets/userPhoto.png';

type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

type ResponseType<T> = {
    items: T
}

export class Users extends React.Component<PropsType> {

    onClickButtonFollowHandler = (userId: number) => {
        this.props.follow(userId)
    }

    onClickButtonUnFollowHandler = (userId: number) => {
        this.props.unFollow(userId)
    }

    componentDidMount() {
        axios.get<ResponseType<UserType[]>>('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {this.props.users.map(el => <div key={el.id} className={s.userItem}>
                <div>
                    <div>{<img
                        src={el.photos.small ? el.photos.small : userPhoto}
                        className={s.userPhoto}/>}</div>
                    <div>
                        {el.followed
                            ? <button onClick={() => this.onClickButtonUnFollowHandler(el.id)}>Unfollow</button>
                            : <button onClick={() => this.onClickButtonFollowHandler(el.id)}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>{el.name}</div>
                    <div>{el.status}</div>
                </div>
            </div>)}
        </div>
    }
}