import React from 'react';
import './Inicio.css';
import Presentation from './components/Presentation/Presentation';
import Hability from './components/Hability/Hability';
import Projects from './components/Projects/Projects';
function Inicios({ toggleTheme, theme, toggleLanguage, language }) {
  return (
    <div className='Inicio'>
      <Presentation toggleLanguage={toggleLanguage} language={language} theme={theme} ></Presentation>
      <Hability toggleLanguage={toggleLanguage} language={language} theme={theme} ></Hability>
      <Projects toggleLanguage={toggleLanguage} language={language} theme={theme} ></Projects>
    </div>
  );
}

export default Inicios;
