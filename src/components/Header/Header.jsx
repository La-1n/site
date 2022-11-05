import React from 'react';
import style from './Header.module.css'
import logo from '../../logo.svg'

const Header = () => {
    return (
        <div className={style.header}>
            <img src={logo} alt=""/>
            CORBIN
        </div>
    );
}

export default Header