import React from "react";
import {MessageType} from "../../../redux/store";

const Message: React.FC<MessageType> = (props) => {
    return <div>{props.message}</div>
}

export default Message;