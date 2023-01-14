import React from 'react';
import {
    addMessageAC,
    DialogType,
    MessageType,
    updateNewMessageTextAC
} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    isAuth: boolean
}

type mapDispatchPropsType = {
    updateTextareaMessage: (text: string) => void
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateTextareaMessage: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        sendMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));