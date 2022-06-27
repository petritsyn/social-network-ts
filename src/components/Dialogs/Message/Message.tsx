import React from "react";
import {MessageType} from "../../../redux/dialogs-reducer";

const Message: React.FC<MessageType> = (props) => {
    return <div>{props.message}</div>
}

export default Message;