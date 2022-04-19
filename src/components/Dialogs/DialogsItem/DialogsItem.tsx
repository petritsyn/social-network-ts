import React from "react";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: number
    name: string
}

const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return <div><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
}

export default DialogsItem;