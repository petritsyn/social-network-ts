import React from 'react';
import s from "components/common/Paginator/Paginator.module.css";

type PropsType = {
    pages: number[]
    onPageChangedHandler: (el: number) => void
    currentPage: number
}

export const Paginator = (props: PropsType) => {
    return (
        <div className={s.pageNumbers}>
            {
                props.pages.map((el, index) => <span key={index} onClick={() => props.onPageChangedHandler(el)}
                                                     className={props.currentPage === el ? s.selectedPage : ''}>{el}</span>)
            }
        </div>
    );
};