import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Home from "./components/Home/Home";
import Info from "./components/Music/Info/Info";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="site">
                <div className="body">
                    <Header/>
                    <Menu/>
                    <Routes className='root-content'>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/news' element={<News newsPage={props.state.newsPage} addPost={props.addPost} updateNewPostTextArea={props.updateNewPostTextArea}/>}/>
                        <Route path='/music' element={<Music songs={props.state.songs}/>}/>
                        <Route path='/music/song' element={<Info/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;