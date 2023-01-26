import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {DialogType, MessageType} from "../../redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    sendMessage: (textMessage: string) => void
    isAuth: boolean
}
type FormDataType = {
    textarea: string
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogsItem id={d.id} name={d.name} key={d.id}/>);
    const messageElements = props.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onSubmit = (formData: FormDataType) => {
        props.sendMessage(formData.textarea)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>

            <div className={s.message}>
                <div>{messageElements}</div>
                <SendMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const SendMessageForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field name={'textarea'} component={'textarea'} placeholder={'Enter the text'} /></div>
        <div><button>Send</button></div>
    </form>
}

const SendMessageReduxForm = reduxForm<FormDataType>({form: 'message'})(SendMessageForm);

export default Dialogs;