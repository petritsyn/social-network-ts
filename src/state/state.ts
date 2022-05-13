import {rerender} from "../index";

export type PostType = {
    id?: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id?: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

export const addPostAC = (postText: string) => ({
    type: "ADD-POST",
    postText: postText
}) as const

export const updateNewPostTextAC = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'First post', likesCount: 5},
                {id: 2, message: 'Second post', likesCount: 7}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Anna'},
                {id: 2, name: 'Alina'},
                {id: 2, name: 'Alexander'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 2, message: 'Hey'}
            ]
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: 3, message: action.postText, likesCount: 10}
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            rerender();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            store._state.profilePage.newPostText = action.newText;
            rerender();
        }
    }
}

export default store;