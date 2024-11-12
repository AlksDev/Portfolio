import React from 'react';
import Cv from './Cv-KevinUrrutia.pdf';
import './ButtonCv.css';
function ButtonCv({toggleLanguage, language, theme }) {
  return (
    <div>
      {language === 'es' ? (
        <button  className={`button-cv ${theme}`}>
          <a href={Cv} target="_blank" rel="noopener noreferrer">
            Descargar CV
          </a>
        </button>  
      ) : (
        <button   className={`button-cv ${theme}`}>
          <a href={Cv} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </button>
      )}
    </div>
  );
}

export default ButtonCv;
