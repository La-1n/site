import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Home from "./components/Home/Home";

const App = () => {
    return (
        <BrowserRouter>
            <div className="site">
                <block className="root">
                    <Header/>
                    <Menu/>
                    <Routes className='root-content'>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                </block>
            </div>
        </BrowserRouter>
    );
}

export default App;