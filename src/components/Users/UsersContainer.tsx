import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import React from "react";
import {default as axios} from "axios";
import Users from "./Users";

type mapStatePropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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

        axios.post<ResponseFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/` + userId, {}, {withCredentials: true, headers: {'API-KEY': '7d54e03a-c727-4a11-92e7-335f41a4e836'}})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.follow(userId)
                }
            })
    }

    onClickButtonUnFollowHandler = (userId: number) => {

        axios.delete<ResponseFollowType>(`https://social-network.samuraijs.com/api/1.0/follow/` + userId, {withCredentials: true, headers: {'API-KEY': '7d54e03a-c727-4a11-92e7-335f41a4e836'}})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.unFollow(userId)
                }
            })
    }

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<ResponseType<UserType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials: true, headers: {'API-KEY': '7d54e03a-c727-4a11-92e7-335f41a4e836'}})
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onPageChangedHandler = (el: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(el)
        axios.get<ResponseType<UserType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
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
                      isFetching={this.props.isFetching}/>
    }
}

export default connect(mapStateToProps, {follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage, setIsFetching})(UsersContainer);