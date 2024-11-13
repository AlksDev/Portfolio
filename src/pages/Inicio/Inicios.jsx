import React from 'react';
import './Inicio.css';
import Presentation from './components/Presentation/Presentation';
import Hability from './components/Hability/Hability';
function Inicios({ toggleTheme, theme, toggleLanguage, language }) {
  return (
    <div className='Inicio'>
<Presentation toggleLanguage={toggleLanguage} language={language} theme={theme} ></Presentation>
  <Hability toggleLanguage={toggleLanguage} language={language} theme={theme}/>
    </div>
  );
}

export default Inicios;
