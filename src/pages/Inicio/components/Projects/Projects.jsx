import React from 'react'
import AllProjects from './components/AllProjects'
import './Projects.css'
function Projects({ toggleLanguage, language, theme }) {
    return (
        <div className='Projects'>
            <div className="Projects-tittle">
                {language === 'es' ? (
                    <h3>Proyectos personales</h3>
                ) : (
                    <h3>Projects Personal</h3>
                )}
            </div>
            <h3 className='Projects-description'>
                {language === 'es' ? (
                    <p>Estos son algunos de mis proyectos personales</p>
                ) : (
                    <p>These are some of my personal projects</p>
                )}
            </h3>
            <div>
                <AllProjects toggleLanguage={toggleLanguage} language={language} theme={theme}></AllProjects>
            </div>
        </div>
    )
}

export default Projects