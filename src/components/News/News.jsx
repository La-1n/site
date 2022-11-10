import React from 'react';
import style from './News.module.css';
import Post from './Post/Post';

const News = (props) => {
    //Data
    let posts = props.newsPage.posts.map(post => <Post time={post.time} text={post.text}/>).reverse();

    //Ref
    let newPostElement = React.createRef();

    //Functions
    let addPost = () => props.addPost();

    let textAreaOnChange = () => props.updateNewPostTextArea(newPostElement.current.value)

    return (
        <div className={style.news}>
            <div className={style.title}>НОВОСТИ</div>
            <hr/>
            <div className={style.textarea}>
                <textarea onChange={textAreaOnChange}
                          ref={newPostElement}
                          value={props.newsPage.textarea}/>
            </div>
            <button onClick={addPost}>опубликовать</button>
            {posts}
        </div>
    );
}

export default News