import songsData from './songs'
import postsData from "./posts";

let state = {
    songs: songsData,
    newsPage: {
        posts: postsData,
        textarea: ''
    }
}

let rerenderTree;

export const addPost = () => {
    let newPost = {
        time: new Date().toLocaleString(),
        text: state.newsPage.textarea
    };

    state.newsPage.posts.push(newPost);
    state.newsPage.textarea = '';
    rerenderTree();
}

export const updateNewPostTextArea = (text) => {
    state.newsPage.textarea = text
    rerenderTree();
}

export const subscribe = (observer) => rerenderTree = observer;

export default state