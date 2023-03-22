import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, requestUsers, unfollow, UserType} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSuperSelector
} from "../../redux/users-selectors";
// import { getUsers } from "../../redux/users-selectors";

type mapStatePropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type PropsType = mapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: getUsersSuperSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        pageSize: getPageSizeSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)
    }
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
    getUsers: requestUsers
})(UsersContainer);