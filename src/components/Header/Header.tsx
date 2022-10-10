import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsType} from "./HeaderContainer";

const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <img src='https://image.shutterstock.com/image-vector/mr-logo-600w-330715661.jpg'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
            </div>
        </div>
    )
}

export default Header;