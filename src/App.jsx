// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Inicio from './Pages/Inicio/Inicio';
import { useThemeContext } from './Context/ThemeContext';

function App() {
  const { theme } = useThemeContext();

  return (
    <Router>
      <div className={`app-container ${theme}`}>
        <div className="App">
          <div className="section-1">
            <Navbar />
          </div>
          <div className="section-2">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path='/Inicio' element={<Inicio />} />
              {/* Agrega más rutas según sea necesario */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
