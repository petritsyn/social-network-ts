import React from 'react';
import {
    addMessageAC,
    DialogType,
    MessageType
} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type mapStatePropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    isAuth: boolean
}

type mapDispatchPropsType = {
    sendMessage: (textMessage: string) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        sendMessage: (textMessage: string) => {
            dispatch(addMessageAC(textMessage))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)