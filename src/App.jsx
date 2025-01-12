import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicios from './pages/Inicio/Inicios';
import SobreMi from './pages/SobreMi/SobreMi';
import Contacto from './pages/Contacto/Contacto';
import Navbar from './components/Navbar/Navbar';
import ParticlesBg from './components/Particles/ParticlesBg';
import './App.css'; 

function App() {
  const [theme, setTheme] = useState('light'); // State for theme
  const [language, setLanguage] = useState('es'); // State for language

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  // Apply theme to the body element
  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={theme}>
      <Router>
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
          toggleLanguage={toggleLanguage}
          language={language}
        />
        <ParticlesBg theme={theme} />
        <Routes>
          <Route
            path="/"
            element={<Inicios toggleTheme={toggleTheme} theme={theme} toggleLanguage={toggleLanguage} language={language} />}
          />
          <Route path="/about" element={<SobreMi toggleTheme={toggleTheme} theme={theme} toggleLanguage={toggleLanguage} language={language} />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
