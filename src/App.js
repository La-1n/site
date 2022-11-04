import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Music from "./components/Music";

const App = () => {
  return (
    <div className="root">
        <Header/>
        <Menu/>
        <Music/>
    </div>
  );
}

export default App;