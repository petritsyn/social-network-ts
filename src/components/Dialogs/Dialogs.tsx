import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div>Name 1</div>
                <div>Name 2</div>
                <div>Name 3</div>
                <div>Name 4</div>
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