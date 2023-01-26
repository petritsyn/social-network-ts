export type ActionsTypes = ReturnType<typeof addMessageAC>

export const addMessageAC = (textMessage: string) => ({
    type: "ADD-MESSAGE",
    textMessage
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
    ]
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {id: 4, message: action.textMessage, likesCount: 10}
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }

        default:
            return state;
    }
}

export default dialogsReducer;