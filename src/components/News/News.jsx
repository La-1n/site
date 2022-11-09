import React from 'react';
import style from './News.module.css';
import Post from './Post/Post';

const News = (props) => {
    //Data
    let posts = props.data.map(post => <Post time={post.time} text={post.text}/>);

    //Ref
    let newPostElement = React.createRef();

    //Functions
    let addPost = () => {
        props.addPost(newPostElement.current.value)
    }

    return (
        <div className={style.news}>
            <div className={style.title}>НОВОСТИ</div>
            <div className={style.textarea}><textarea ref={newPostElement}/></div>
            <button onClick={addPost}>опубликовать</button>
            {posts}
        </div>
    );
}

export default News