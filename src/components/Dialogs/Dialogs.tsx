import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    message: string
}

type DialogsDataType = {
    id: number
    name: string
}

type MessageDataType = {
    id: number
    message: string
}

const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return <div><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
}

const Message: React.FC<MessagePropsType> = (props) => {
    return <div>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData: Array<DialogsDataType> = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Anna'},
        {id: 2, name: 'Alina'},
        {id: 2, name: 'Alexander'},
    ];

    let messageData: Array<MessageDataType> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 2, message: 'Hey'}
    ]

    const dialogsElements = dialogsData.map(d => <DialogsItem id={d.id} name={d.name}/>);
    const messageElements = messageData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;