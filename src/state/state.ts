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
    addPost: (postTest: string) => void
    updateNewPostText: (newText: string) => void
}

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
    addPost(postText: string) {
        let newPost = {id: 3, message: postText, likesCount: 10}
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        rerender();
    },
    updateNewPostText(newText: string) {
        store._state.profilePage.newPostText = newText;
        rerender();
    }
}

export default store;