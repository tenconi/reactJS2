import {Cards} from '../src/components/Cards/Cards.js';
import './App.css';
import Clickeable from './components/catalogo/Clickeable/Clickeable.jsx';
import NavBar from './components/navBar/NavBar.jsx';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cards/>
      
      <Clickeable/>
    </div>
  );
}

export default App;
