import './App.css'

import Header from "./components/Header"
import Menu from "./components/Menu"
import Music from "./components/Music"

const App = () => {
    return (
        <block className="root">
            <Header/>
            <Menu/>
            <Music/>
        </block>
    );
}

export default App;