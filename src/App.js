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
                <block className="body">
                    <Header/>
                    <Menu/>
                    <Routes className='root-content'>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/news' element={<News data={props.state.posts}/>}/>
                        <Route path='/music' element={<Music data={props.state.songs}/>}/>
                        <Route path='/music/song' element={<Info/>}/>
                    </Routes>
                </block>
            </div>
        </BrowserRouter>
    );
}

export default App;