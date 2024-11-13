import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaJava, FaPython, FaReact, FaHtml5, FaBootstrap, FaDocker, FaGit } from "react-icons/fa";
import { SiSpringboot, SiSpring, SiVisualstudiocode, SiVisualstudio, SiIntellijidea, SiCsharp, SiJavascript, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importar los estilos del carrusel
import './Hability.css'; // Importar estilos personalizados

function Hability({ toggleLanguage, language, theme }) {
  const onChange = (index) => {
    console.log("Carrusel cambiado a:", index);
  };

  const onClickItem = (index) => {
    console.log("Ítem del carrusel clickeado:", index);
  };

  const onClickThumb = (index) => {
    console.log("Miniatura del carrusel clickeada:", index);
  };

  const Languages = [
    { name: "Java", icon: <FaJava size={50} /> },
    { name: "Python", icon: <FaPython size={50} /> },
    { name: "C#", icon: <SiCsharp size={50} /> },
    { name: "JavaScript", icon: <SiJavascript size={50} /> },
  ];

  const DataBase = [
    { name: "MySQL", icon: <SiMysql size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={50} /> },
  ];

  const Frameworks = [
    { name: "Spring", icon: <SiSpring size={50} /> },
    { name: "Spring Boot", icon: <SiSpringboot size={50} /> },
    { name: "React", icon: <FaReact size={50} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={50} /> },
  ];

  const Tools = [
    { name: "Docker", icon: <FaDocker size={50} /> },
    { name: "Git", icon: <FaGit size={50} /> },
    { name: "Visual Studio Code", icon: <SiVisualstudiocode size={50} /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea size={50} /> },
    { name: "Visual Studio", icon: <SiVisualstudio size={50} /> },
  ];

  return (
    <div className={`hability-container ${theme}`}>
      <h1 className="hability-title">
        {language === 'es' ? "Mis habilidades" : "My Skills"}
      </h1>
      <h2>{language === 'es' ? "Lenguajes de programación" : "Programming languages"}</h2>
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        autoPlay={false}
        infiniteLoop={true}
        showStatus={false}
        emulateTouch={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={40}
        showIndicators={false}
        swipeable={true}
        className={theme}  
      >
        {Languages.map((language, index) => (
          <div key={index}>
            {language.icon}
            <h3>{language.name}</h3>
          </div>
        ))}
      </Carousel>

      <hr className={`line-hability ${theme}`} />
      <h2>{language === 'es' ? "Base de datos" : "Database"}</h2>
      <Carousel
        showArrows={false}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        autoPlay={false}
        infiniteLoop={true}
        showStatus={false}
        emulateTouch={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={40}
        showIndicators={false}
        swipeable={true}
        className={theme} 
      >
        {DataBase.map((database, index) => (
          <div key={index}>
            {database.icon}
            <h3>{database.name}</h3>
          </div>
        ))}
      </Carousel>

      <hr className={`line-hability ${theme}`} />
      <h2>{language === 'es' ? "ORM, Frameworks, Plataformas & Librerias" : "ORM, Frameworks, Platforms & Libraries"}</h2>
      <Carousel
        showArrows={false}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        autoPlay={false}
        infiniteLoop={true}
        showStatus={false}
        emulateTouch={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={40}
        showIndicators={false}
        swipeable={true}
        className={theme}  
      >
        {Frameworks.map((framework, index) => (
          <div key={index}>
            {framework.icon}
            <h3>{framework.name}</h3>
          </div>
        ))}
      </Carousel>

      <hr className={`line-hability ${theme}`} />
      <h2>{language === 'es' ? "IDEs, Editor de código & Herramientas de desarrollo" : "IDEs, Code Editor & Development Tools"}</h2>
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        autoPlay={false}
        infiniteLoop={true}
        showStatus={false}
        emulateTouch={true}
        dynamicHeight={false}
        centerMode={true}
        centerSlidePercentage={40}
        showIndicators={false}
        swipeable={true}
        className={theme}  
      >
        {Tools.map((tools, index) => (
          <div key={index}>
            {tools.icon}
            <h3>{tools.name}</h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hability;
