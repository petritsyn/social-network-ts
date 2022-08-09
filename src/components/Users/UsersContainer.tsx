import {connect} from "react-redux";
import {Users} from "./Users";
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);