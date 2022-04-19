import React from "react";

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return <div>{props.message}</div>
}

export default Message;