import React, { useState } from 'react';
import './AllProjects.css';

function AllProjects({ toggleLanguage, language, theme }) {
    const [selectedCategory, setSelectedCategory] = useState('');

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
        },
        {
            id: 2,
            name: 'Desarrollo Software',
            category: 'software',
            link: 'https://github.com/KevinDev-Dev/API',
            img: 'https://i.ibb.co/6wL6V9Y/Api.png',
            description: 'Desarrollo Software',
        },
        {
            id: 3,
            name: 'Desarrollo Web',
            category: 'web',
            link: 'https://github.com/AlksDev/Portfolio',
            img: 'https://i.ibb.co/6wL6V9Y/Api.png',
            description: 'Desarrollo Web',
        },
        {
            id: 4,
            name: 'Desarrollo Web',
            category: 'web',
            link: 'https://github.com/AlksDev/Portfolio',
            img: 'https://i.ibb.co/6wL6V9Y/Api.png',
            description: 'Desarrollo Web',
        },
    ];

    // Filter Projects based on selected category
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
            {/* Display Filtered Projects */}
            <div className={`Projects-list ${theme}`}>
                {filteredProjects.map((project) => (
                    <div key={project.id} className={`Project ${theme}`}>
                        <img src={project.img} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
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
