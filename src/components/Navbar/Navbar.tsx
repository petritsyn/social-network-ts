import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.nav}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
            <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
    )
}

export default Navbar;