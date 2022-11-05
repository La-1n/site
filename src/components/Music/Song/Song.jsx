import React from 'react';
import style from './Song.module.css'

const Song = (props) => {
    return (
        <div className={style.song}>
            <img
                src={props.image}
                alt=''/>
            <div className={style.title}>
                <i>{props.title}</i>
            </div>
        </div>
    );
}

export default Song