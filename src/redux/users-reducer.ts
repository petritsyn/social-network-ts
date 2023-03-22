import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type InitialStateType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type ResponseType<T> = {
    items: T
    totalCount: number
}

type ActionsTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

export const followSuccess = (userId: number) => ({
    type: 'FOLLOW',
    id: userId
}) as const

export const unfollowSuccess = (userId: number) => ({
    type: 'UNFOLLOW',
    id: userId
}) as const

export const setUsers = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users: users
}) as const

export const setTotalUsersCount = (totalCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount: totalCount
}) as const

export const setCurrentPage = (currentPage: number) => ({
    type: 'SET-CURRENT-PAGE',
    currentPage: currentPage
}) as const

export const setIsFetching = (isFetching: boolean) => ({
    type: 'SET-IS-FETCHING',
    isFetching: isFetching
}) as const

export const toggleIsFollowingProgress = (isDisable: boolean, userId: number) => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    isDisable,
    userId
}) as const


export type PhotoType = {
    small: string | undefined
    large: string | undefined
}

export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: PhotoType
}

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}

        case "UNFOLLOW":
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}

        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}

        case "SET-USERS":
            return {...state, users: action.users}

        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}

        case "SET-IS-FETCHING":
            return {...state, isFetching: action.isFetching}

        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isDisable
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }


        default:
            return state
    }
}

export const requestUsers = (page: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize)
            .then((data: ResponseType<UserType[]>) => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(setIsFetching(false));
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unFollow(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            })
    }
}