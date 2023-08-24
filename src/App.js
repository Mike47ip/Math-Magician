import './App.css';
import {
  Route, Routes, Link,
} from 'react-router-dom';
import Calculator from './Component/Calculator';
import Quotes from './Component/Quotes';

function App() {
  return (
    <>
      <nav className="navBar">
        <h1>Math Magician</h1>
        <div className="navLinks">
          <Link>Home</Link>
          <Link>Calculator</Link>
          <Link>Qoutes</Link>
        </div>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/Qoutes" element={<Quotes />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
