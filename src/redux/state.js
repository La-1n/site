import {rerenderTree} from "../render";

import songsData from './songs'
import postsData from "./posts";

let state = {
    songs: songsData,
    posts: postsData
}

export let addPost = (text) => {
    let newPost = {
        time: new Date().toLocaleString(),
        text: text
    };

    state.posts.push(newPost);
    rerenderTree(state);
}

export default state