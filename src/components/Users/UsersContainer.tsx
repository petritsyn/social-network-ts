import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers, toggleIsFollowingProgress,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {default as axios} from "axios";
import Users from "./Users";
import {usersAPI} from "../../api/api";

type mapStatePropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

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
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isDisable: boolean, userId: number) => void
    followingInProgress: Array<number>
}

type ResponseType<T> = {
    items: T
    totalCount: number
}
type ResponseFollowType = {
    resultCode: number
}

export class UsersContainer extends React.Component<PropsType> {

    onClickButtonFollowHandler = (userId: number) => {

        this.props.toggleIsFollowingProgress(true, userId)
        axios.post<ResponseFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/` + userId, {}, {
            withCredentials: true,
            headers: {'API-KEY': '7d54e03a-c727-4a11-92e7-335f41a4e836'}
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.follow(userId)
                }
                this.props.toggleIsFollowingProgress(false, userId)
            })
    }

    onClickButtonUnFollowHandler = (userId: number) => {

        this.props.toggleIsFollowingProgress(true, userId)
        axios.delete<ResponseFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/` + userId, {
            withCredentials: true,
            headers: {'API-KEY': '7d54e03a-c727-4a11-92e7-335f41a4e836'}
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.unFollow(userId)
                }
                this.props.toggleIsFollowingProgress(false, userId)
            })
    }

    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((data: ResponseType<UserType[]>) => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onPageChangedHandler = (el: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(el)
        usersAPI.getUsers(el, this.props.pageSize)
            .then((data: ResponseType<UserType[]>) => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      onPageChangedHandler={this.onPageChangedHandler}
                      onClickButtonUnFollowHandler={this.onClickButtonUnFollowHandler}
                      onClickButtonFollowHandler={this.onClickButtonFollowHandler}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}/>
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    toggleIsFollowingProgress
})(UsersContainer);