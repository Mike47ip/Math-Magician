import './App.css';
import {
  Route, Routes, Link,
} from 'react-router-dom';
import Calculator from './Component/Calculator';
import Quotes from './Component/Quotes';
import Home from './Component/Home';

function App() {
  return (
    <>
      <nav className="navBar">
        <h1>Math Magician</h1>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="Calculator">Calculator</Link>
          <Link to="/Quotes">Qoutes</Link>
        </div>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="*" element={<h4>PAGE NOT FOUND</h4>} />
        </Routes>
      </div>
    </>

  );
}

export default App;
