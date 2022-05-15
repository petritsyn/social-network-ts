import {ActionsTypes, DialogsPageType} from "./state";

export const addMessageAC = (newMessageText: string) => ({
    type: "ADD-MESSAGE",
    newMessageText: newMessageText
}) as const

export const updateNewMessageTextAC = (newText: string) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: newText
}) as const

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newPost = {id: 4, message: action.newMessageText, likesCount: 10}
            state.messages.push(newPost);
            state.newMessageText = '';
            return state;

        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export default dialogsReducer;