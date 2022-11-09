import React from 'react';
import style from './Music.module.css';
import Song from './Song/Song';

const Music = (props) => {
    let songs = props.data.map(song => <Song title={song.title} image={song.image}/>);

    return (
        <div className={style.music}>
            <div className={style.title}>МУЗЫКА</div>
            {songs}
        </div>
    );
}

export default Music