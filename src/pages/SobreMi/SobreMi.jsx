import React from 'react'
import './SobreMi.css'
import Description from './components/Description/Description'
function SobreMi({ toggleTheme, theme, toggleLanguage, language }) {
  return (
    <div className='SobreMi'>
        <Description toggleLanguage={toggleLanguage} language={language} theme={theme}></Description>
    </div>
  )
}

export default SobreMi