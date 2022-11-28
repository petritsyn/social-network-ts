import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, unfollow, getUsers, UserType} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";

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
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (isDisable: boolean, userId: number) => void
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}

export type ResponseType<T> = {
    items: T
    totalCount: number
}

class UsersContainer extends React.Component<PropsType> {

    onClickButtonFollowHandler = (userId: number) => {
        this.props.follow(userId)
    }

    onClickButtonUnFollowHandler = (userId: number) => {
        this.props.unfollow(userId)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChangedHandler = (el: number) => {
        this.props.getUsers(el, this.props.pageSize);
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
    unfollow,
    getUsers
})(UsersContainer);