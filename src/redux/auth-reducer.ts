import {Dispatch} from "redux";
import {API} from "../api/api";

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

export const authReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
            case "SET_USER_DATA": {
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                }
        }
        default: {
            return state
        }
    }
}

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
}

export const setAuthUserDataAC = (data: DataType) => ({type: "SET_USER_DATA", data}) as const

export const auth = () => {
    return (dispatch: Dispatch) => {
        API.me()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(response.data.data));
                }
            })
    }
}