import React from 'react';
import style from './Song.module.css'
import {NavLink} from "react-router-dom";

const Song = (props) => {
    return (
        <div className={style.song}>
            <img
                src={props.image}
                alt=''/>
            <div className={style.title}>
                <i>{props.title}</i>
            </div>
            <div className={style.info}>
                <NavLink to={"/music/song"}>инфа</NavLink>
            </div>
        </div>
    );
}

export default Song