type InitialStateType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}
type ActionsTypes = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setIsFetching>

export const follow = (userId: number) => ({
    type: 'FOLLOW',
    id: userId
}) as const

export const unFollow = (userId: number) => ({
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
    isFetching: false
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


        default:
            return state
    }
}