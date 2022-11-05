import React from 'react';
import style from './Music.module.css'
import Song from './Song/Song'

const Music = () => {
    return (
        <div className={style.music}>
            MUSIC
            <Song name='lox' image='https://steamuserimages-a.akamaihd.net/ugc/928179308847426445/B8E5FE45CA9B0A34416B2ACB3D4CF5B2CE83F7F5/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'/>
        </div>
    );
}

export default Music