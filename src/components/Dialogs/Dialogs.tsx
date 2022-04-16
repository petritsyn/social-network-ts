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
    ];

    let messageData: Array<MessageDataType> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogsItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogsItem id={dialogsData[1].id} name={dialogsData[1].name}/>

            </div>

            <div className={s.message}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
            </div>
        </div>


    );
};

export default Dialogs;