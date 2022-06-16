import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {ActionsTypes, DialogType, MessageType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogsItem id={d.id} name={d.name} key={d.id}/>);
    const messageElements = props.messages.map(m => <Message message={m.message} key={m.id}/>)

    const messageTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    const sendMessageHandler = () => {
        props.dispatch(addMessageAC(props.newMessageText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                <div>{messageElements}</div>
                <div><textarea onChange={messageTextareaHandler} value={props.newMessageText}/></div>
                <div><button onClick={sendMessageHandler}>Send</button></div>
            </div>
        </div>
    );
};

export default Dialogs;