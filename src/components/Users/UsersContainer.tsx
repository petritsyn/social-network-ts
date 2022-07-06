import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type mapStatePropsType = {
    users: Array<UserType>
}

type mapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage
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
       }
   }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);