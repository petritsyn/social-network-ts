import React from 'react';
import {UserType} from "redux/users-reducer";
import Preloader from "../Preloader/Preloader";
import {Paginator} from "../common/Paginator/Paginator"
import {User} from "components/Users/User/User";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    currentPage: number
    onPageChangedHandler: (el: number) => void
    onClickButtonUnFollowHandler: (id: number) => void
    onClickButtonFollowHandler: (id: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
}

const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {props.isFetching && <div><Preloader/></div>}

        <Paginator currentPage={props.currentPage} pages={pages} onPageChangedHandler={props.onPageChangedHandler}/>

        <div>
            {props.users.map(el => <User user={el} key={el.id} users={props.users}
                                         followingInProgress={props.followingInProgress}
                                         onClickButtonUnFollowHandler={props.onClickButtonUnFollowHandler}
                                         onClickButtonFollowHandler={props.onClickButtonFollowHandler}/>)}
        </div>

    </div>
};

export default Users;