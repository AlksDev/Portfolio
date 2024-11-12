import React from 'react';
import './Inicio.css';
import Presentation from './components/Presentation';
function Inicios({ toggleTheme, theme, toggleLanguage, language }) {
  return (
    <div className='Inicio'>
<Presentation toggleLanguage={toggleLanguage} language={language} theme={theme} ></Presentation>
    </div>
  );
}

export default Inicios;
