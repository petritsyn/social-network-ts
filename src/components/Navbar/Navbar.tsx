import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.nav}>
            <a>Profile</a>
            <a>Messages</a>
            <a>Friends</a>
            <a>Music</a>
        </div>
    )
}

export default Navbar;