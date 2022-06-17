import {rerender} from "../index";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";

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
    newMessageText: string
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
export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

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
                {id: 3, name: 'Alina'},
                {id: 4, name: 'Alexander'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hey'}
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        store.getState().profilePage = profileReducer(store.getState().profilePage, action)
        store.getState().dialogsPage = dialogsReducer(store.getState().dialogsPage, action)
        rerender(store.getState())
    }
}

export default store;