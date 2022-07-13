type InitialStateType = typeof initialState;
type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({
    type: 'FOLLOW',
    id: userId
}) as const

export const unFollowAC = (userId: number) => ({
    type: 'UNFOLLOW',
    id: userId
}) as const

export const setUsersAC = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users: users
}) as const

export type PhotoType = {
    small: string
}

export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: PhotoType
}

const initialState = [
    {id: 1, photos: {small: 'https://proza.ru/pics/2010/04/27/810.jpg'}, name: 'Andrew', status: 'status', followed: true},
    {id: 2, photos: {small: 'https://proza.ru/pics/2010/04/27/810.jpg'}, name: 'Anna', status: 'hey', followed: false},
    {id: 3, photos: {small: 'https://proza.ru/pics/2010/04/27/810.jpg'}, name: 'Sergey', status: 'hello', followed: true}
];

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return state.map(el => el.id === action.id ? {...el, followed: true} : el)

        case "UNFOLLOW":
            return state.map(el => el.id === action.id ? {...el, followed: false} : el)

        case "SET-USERS":
            return [...action.users]

        default: return state
    }
}