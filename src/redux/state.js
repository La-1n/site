import {rerenderTree} from "../render";

import songsData from './songs'
import postsData from "./posts";

let state = {
    songs: songsData,
    newsPage: {
        posts: postsData,
        textarea: ''
    }
}

export let addPost = () => {
    let newPost = {
        time: new Date().toLocaleString(),
        text: state.newsPage.textarea
    };

    state.newsPage.posts.push(newPost);
    state.newsPage.textarea = '';
    rerenderTree(state);
}

export let updateNewPostTextArea = (text) => {
    state.newsPage.textarea = text
    rerenderTree(state);
}

export default state