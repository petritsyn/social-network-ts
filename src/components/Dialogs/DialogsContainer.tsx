import React from 'react';
import {ActionsTypes, DialogType, MessageType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const DialogsContainer = (props: DialogsPropsType) => {

    const updateTextareaMessage = (text: string) => {
        props.dispatch(updateNewMessageTextAC(text))
    }

    const sendMessage = () => {
        props.dispatch(addMessageAC(props.newMessageText))
    }

    return (
        <Dialogs dialogs={props.dialogs}
                 messages={props.messages}
                 updateTextareaMessage={updateTextareaMessage}
                 sendMessage={sendMessage} newMessageText={props.newMessageText} />
    );
};

export default DialogsContainer;