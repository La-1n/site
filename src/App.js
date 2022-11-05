import './App.css'

import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Music from "./components/Music/Music"
import News from "./components/News/News";

const App = () => {
    return (
        <block className="root">
            <Header/>
            <Menu/>
            <div className='root-content'>
                {/*<Music/>*/}
                <News/>
            </div>
        </block>
    );
}

export default App;