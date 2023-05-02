import {PhotoType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI} from "api/api";

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof deletePostAC>

export const addPostAC = (postText: string) => ({
    type: "ADD-POST",
    postText
}) as const

export const setUserProfile = (profile: ProfileType) => ({
    type: "SET-USER-PROFILE",
    profile: profile
}) as const

export const setStatusAC = (status: string) => ({
    type: "SET-STATUS",
    status
}) as const

export const deletePostAC = (id: number) => ({
    type: "DELETE-POST",
    id
}) as const

export type InitialStateType = {
    posts: Array<{ id: number, message: string, likesCount: number }>
    profile: null | ProfileType
    status: string
}

export type PostType = {
    id?: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: PhotoType
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'First post', likesCount: 5},
        {id: 2, message: 'Second post', likesCount: 7}
    ],
    profile: null as null | ProfileType,
    status: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: 3, message: action.postText, likesCount: 10}
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }

        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }

        case "DELETE-POST":
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.id)
            }

        default:
            return state;
    }
}

export const getProfile = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.profile(userId)
                dispatch(setUserProfile(response.data));
    }
}

export const getStatus = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.getStatus(userId)
                dispatch(setStatusAC(response.data));
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        const response = await profileAPI.updateStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status));
                }
    }
}
