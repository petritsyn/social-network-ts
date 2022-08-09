import React from 'react';
import {UserType} from "../../redux/users-reducer";
import s from './Users.module.css';
import {default as axios} from "axios";
import userPhoto from '../../assets/userPhoto.png';

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

type ResponseType<T> = {
    items: T
    totalCount: number
}

export class Users extends React.Component<PropsType> {

    onClickButtonFollowHandler = (userId: number) => {
        this.props.follow(userId)
    }

    onClickButtonUnFollowHandler = (userId: number) => {
        this.props.unFollow(userId)
    }

    componentDidMount() {
        axios.get<ResponseType<UserType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChangedHandler = (el: number) => {
        this.props.setCurrentPage(el)
        axios.get<ResponseType<UserType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {
                    pages.map((el, index) => <span key={index} onClick={() => this.onPageChangedHandler(el)} className={this.props.currentPage === el ? s.selectedPage : ''}>{el}</span>)
                }
            </div>
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