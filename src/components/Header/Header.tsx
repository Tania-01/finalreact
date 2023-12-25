import React from 'react';
import {NavLink} from "react-router-dom"
import style from './Header.module.css'
const Header = () => {
    return (
        <div className={style.header}>
            <NavLink className={style.text} to={'movie'}>Movie</NavLink>
            <NavLink className={style.text} to={'genre'}>Genre</NavLink>
        </div>
    );
};

export default Header;