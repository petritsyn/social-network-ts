import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {DialogsPageType} from "../../state/state";

const Dialogs = (props: DialogsPageType) => {

    const dialogsElements = props.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>);
    const messageElements = props.messages.map(m => <Message message={m.message}/>)

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