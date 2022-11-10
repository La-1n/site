import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewPostTextArea} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = () =>
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostTextArea={updateNewPostTextArea}/>
        </React.StrictMode>
    );

rerenderTree();
subscribe(rerenderTree);

reportWebVitals();
