import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type ActionsTypes = ReturnType<typeof setAuthUserDataAC>

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
            case "SET_USER_DATA": {
                return {
                    ...state,
                    ...action.payload
                }
        }
        default: {
            return state
        }
    }
}

export type payloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const setAuthUserDataAC = (payload: payloadType) => ({type: "SET_USER_DATA", payload}) as const

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserDataAC({id, email, login, isAuth: true}));
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC({id: null, email: null, login: null, isAuth: false}));
                }
            })
    }
}