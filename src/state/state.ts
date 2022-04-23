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
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'First post', likesCount: 5},
            {id: 2, message: 'Second post', likesCount: 7}
        ]
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
}

export const addPost = (postText: string) => {
    let newPost = {id: 3, message: postText, likesCount: 10}
    state.profilePage.posts.push(newPost);
    rerender()
}

export default state;