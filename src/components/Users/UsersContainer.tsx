import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import React from "react";
import {default as axios} from "axios";
import Users from "./Users";

type mapStatePropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

type mapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
   return {
       follow: (userId: number) => {
           dispatch(followAC(userId))
       },
       unFollow: (userId: number) => {
           dispatch(unFollowAC(userId))
       },
       setUsers: (users: Array<UserType>) => {
           dispatch(setUsersAC(users))
       },
       setTotalUsersCount: (totalCount: number) => {
           dispatch(setTotalUsersCountAC(totalCount))
       },
       setCurrentPage: (currentPage: number) => {
           dispatch(setCurrentPageAC(currentPage))
       }
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
}

type ResponseType<T> = {
    items: T
    totalCount: number
}

export class UsersContainer extends React.Component<PropsType> {

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

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      onPageChangedHandler={this.onPageChangedHandler}
                      onClickButtonUnFollowHandler={this.onClickButtonUnFollowHandler}
                      onClickButtonFollowHandler={this.onClickButtonFollowHandler}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);