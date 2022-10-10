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

const authReducer = (state: initialStateType = initialState, action: ActionsTypes) => {
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

export default authReducer;