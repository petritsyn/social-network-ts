import React from "react";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../state/state";

const DialogsItem: React.FC<DialogType> = (props) => {
    return <div><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
}

export default DialogsItem;