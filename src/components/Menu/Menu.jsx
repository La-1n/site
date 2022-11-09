import React from 'react';
import style from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.title}>МЕНЮ</div>
            <div className={style.item}>
                <NavLink exact to="/">Главная</NavLink>
            </div>
            <div className={style.item}>
                <NavLink exact to="/news">Новости</NavLink>
            </div>
            <div className={style.item}>
                <NavLink exact to="/music">Музыка</NavLink>
            </div>
        </div>
    );
}

export default Menu