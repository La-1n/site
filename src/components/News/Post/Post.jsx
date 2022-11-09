import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.time}>{props.time}</div>
            <div className={style.text}>{props.text}</div>
        </div>
    );
}

export default Post