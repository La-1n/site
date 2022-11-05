import React from 'react';
import style from './Menu.module.css'

const Menu = () => {
    return (
        <nav className={style.menu}>
            МЕНЮ
            <ul>
                <li><a href="/news">Новости</a></li>
                <li><a href="/music">Музыка</a></li>
            </ul>
        </nav>
    );
}

export default Menu