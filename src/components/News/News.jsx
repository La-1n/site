import React from 'react';
import style from './News.module.css';
import Post from './Post/Post';

const News = (props) => {
    let posts = props.data.map(post => <Post time={post.time} text={post.text}/>);

    return (
        <div className={style.news}>
            <div className={style.title}>НОВОСТИ</div>
            <div className={style.textarea}><textarea/></div>
            <button>опубликовать</button>
            {posts}
        </div>
    );
}

export default News