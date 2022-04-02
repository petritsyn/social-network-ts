import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div><NavLink to='/dialogs/1'>Name 1</NavLink></div>
                <div><NavLink to='/dialogs/2'>Name 2</NavLink></div>
                <div><NavLink to='/dialogs/3'>Name 3</NavLink></div>
                <div><NavLink to='/dialogs/4'>Name 4</NavLink></div>
            </div>

            <div className={s.message}>
                <div>Hello</div>
                <div>How are you?</div>
                <div>Hey</div>
            </div>
        </div>


    );
};

export default Dialogs;