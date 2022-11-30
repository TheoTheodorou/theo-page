import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Home from './Modules/Home/Home';
import Work from './Modules/Work/Work';
import About from './Modules/About/About';
import NavbarTest from './Components/NavBar/NavbarTest';

function App() {
  return (
    <div className="App">
      <NavbarTest />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
