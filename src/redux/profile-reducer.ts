export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => ({
    type: "ADD-POST",
}) as const

export const updateNewPostTextAC = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const

export type InitialStateType = {
    posts: Array<{id: number, message: string, likesCount: number}>
    newPostText: string
}

export type PostType = {
    id?: number
    message: string
    likesCount: number
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'First post', likesCount: 5},
        {id: 2, message: 'Second post', likesCount: 7}
    ],
    newPostText: ''
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

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

        default:
            return state;
    }
}

export default profileReducer;