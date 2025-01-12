import React, { useState } from 'react';
import './AllProjects.css';
import Portafolio from './imagenPortafolio.jpg';
import Itr from './itr.png';

function AllProjects({ toggleLanguage, language, theme }) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const Projects = [
        {
            id: 1,
            name: 'API',
            category: 'api',  
            link: 'https://github.com/KevinDev-Dev/API',
            img: 'https://i.ibb.co/6wL6V9Y/Api.png',
            description: 'API',
            descripcion: 'API',
        },
        {
            id: 2,
            name: 'Desarrollo Software',
            category: 'software',
            link: 'https://github.com/KevinDev-Dev/API',
            img: 'https://i.ibb.co/6wL6V9Y/Api.png',
            description: 'Software Development',
            descripcion: 'Desarrollo Software',
        },
        {
            id: 3,
            name: 'Portafolio',
            category: 'web',
            link: 'https://github.com/AlksDev/Portfolio',
            img: Portafolio,
            descripcion: 'Proyecto realizado para mi portafolio personal',
            description: 'Project created for my personal portfolio',
        },
        {
            id: 4,
            name: 'Sistema IOT',
            category: 'api',  
            link: 'https://github.com/AlksDev/Dispositivo-Iot',
            img: Itr,
            description: 'Application for my degrees designed for IOT systems management',
            descripcion: 'Aplicacion para mi proyecto de grados diseñada para el manejo de sistemas IOT ',
        },
    ];

    const filteredProjects = selectedCategory === 'all'
        ? Projects
        : Projects.filter((project) => project.category === selectedCategory);

    return (
        <div className={`Projects-category-filter ${theme}`}>
            <div className={`Projects-category ${theme}`}>
                <input
                    type="radio"
                    id="api"
                    name="category"
                    value="api"
                    checked={selectedCategory === 'api'}
                    onChange={handleCategoryChange}
                />
                <label htmlFor="api">API</label>

                <input
                    type="radio"
                    id="software"
                    name="category"
                    value="software"
                    checked={selectedCategory === 'software'}
                    onChange={handleCategoryChange}
                />
                <label htmlFor="software">
                    {language === 'es' ? 'Desarrollo Software' : 'Software'}
                </label>

                <input
                    type="radio"
                    id="web"
                    name="category"
                    value="web"
                    checked={selectedCategory === 'web'}
                    onChange={handleCategoryChange}
                />
                <label htmlFor="web">
                    {language === 'es' ? 'Desarrollo Web' : 'Web Development'}
                </label>

                <input
                    type="radio"
                    id="all"
                    name="category"
                    value="all"
                    checked={selectedCategory === 'all'}
                    onChange={handleCategoryChange}
                />
                <label htmlFor="all">
                    {language === 'es' ? 'Todos' : 'All'}
                </label>
            </div>

            <div className={`Projects-list ${theme}`}>
                {filteredProjects.map((project) => (
                    <div key={project.id} className={`Project ${theme}`}>
                        <img src={project.img} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{language === 'es' ? project.descripcion : project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {language === 'es' ? 'Ver proyecto' : 'View Project'}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProjects;
