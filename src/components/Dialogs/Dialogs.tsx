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

const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return <div><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
}

const Message: React.FC<MessagePropsType> = (props) => {
    return <div>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogsItem id={1} name={'Andrey'}/>
                <DialogsItem id={2} name={'Anna'}/>
                <DialogsItem id={3} name={'Alina'}/>
                <DialogsItem id={4} name={'Sergey'}/>

            </div>

            <div className={s.message}>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
                <Message message={'Hey'}/>
            </div>
        </div>


    );
};

export default Dialogs;