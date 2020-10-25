import './App.css';
import { NavItem, NavLink,Container, Col, Row } from 'reactstrap';
import Navig from './Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header>
          <Navig/>
      </header>
      <body>
        <Home/>
      </body>
    </div>
  );
}

export default App;
