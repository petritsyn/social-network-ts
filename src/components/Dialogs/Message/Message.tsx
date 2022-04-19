import React from "react";
import {MessageType} from "../../../state/state";

const Message: React.FC<MessageType> = (props) => {
    return <div>{props.message}</div>
}

export default Message;