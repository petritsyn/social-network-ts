export type ActionsTypes = ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>

export const addMessageAC = () => ({
    type: "ADD-MESSAGE"
}) as const

export const updateNewMessageTextAC = (newText: string) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: newText
}) as const

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id?: number
    message: string
}

type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

let initialState: InitialStateType = {
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

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {id: 4, message: state.newMessageText, likesCount: 10}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }

        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.newText
            }

        default:
            return state;
    }
}

export default dialogsReducer;