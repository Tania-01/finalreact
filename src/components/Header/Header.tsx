import React from 'react';
import {NavLink} from "react-router-dom"
import style from './Header.module.css'
const Header = () => {
    return (
        <div className={style.header}>
            <NavLink to={'movie'}>Movie</NavLink>
        </div>
    );
};

export default Header;