import {PhotoType, toggleIsFollowingProgress, unfollowSuccess} from "./users-reducer";
import {Dispatch} from "redux";
import {API} from "../api/api";
import {setAuthUserDataAC} from "./auth-reducer";

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof setUserProfile>

export const addPostAC = () => ({
    type: "ADD-POST",
}) as const

export const updateNewPostTextAC = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const

export const setUserProfile = (profile: ProfileType) => ({
    type: "SET-USER-PROFILE",
    profile: profile
}) as const

export type InitialStateType = {
    posts: Array<{id: number, message: string, likesCount: number}>
    newPostText: string
    profile: null | ProfileType
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
    newPostText: '',
    profile: null as null | ProfileType
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: 3, message: state.newPostText, likesCount: 10}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }

        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const getProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        API.profile(userId)
            .then((response) => {
                dispatch(setUserProfile(response.data));
            })
    }
}
