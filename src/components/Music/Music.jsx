import React from 'react';
import style from './Music.module.css'
import Song from './Song/Song'

const Music = () => {
    return (
        <div className={style.music}>
            <div className={style.title}>МУЗЫКА</div>
            <Song title='Maybe-Baby' image='https://pixelbox.ru/wp-content/uploads/2021/03/dark-ava-steam-93.jpg'/>
            <Song title='Loshara' image='https://pixelbox.ru/wp-content/uploads/2021/03/dark-ava-steam-55.jpg'/>
        </div>
    );
}

export default Music