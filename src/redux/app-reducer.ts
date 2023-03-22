import {getAuthUserData} from "./auth-reducer";
import {AppThunk} from "./redux-store";

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

const initializedSuccessAC = () => ({type: 'INITIALIZED-SUCCESS'} as const)

export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccessAC())
    })
}

type InitialStateType = typeof initialState
type ActionsAppType = ReturnType<typeof initializedSuccessAC>