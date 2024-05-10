import React from "react";
import "./Aptitudes.css";
import { useThemeContext } from "../../Context/ThemeContext";
import { useLanguageContext } from "../../Context/LanguageContext";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import ImageA from "./Images/Aptitudes.gif";
import ImagenB from "./Images/Languages.gif";

import { FaUsers } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";

function Aptitudes() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const idiomas = [
    {
      id: 1,
      name: "Español",
      description: "Nativo",
      icon: "🇪🇸",
      progress: 100,
    },
    {
      id: 2,
      name: "Inglés",
      description: "B1",
      icon: "🇬🇧",
      progress: 45,
    },
  ];

  return (
    <ScrollAnimation
      animateIn="slideInRight"
      animateOut="slideOutRight"
      style={{ marginLeft: "150px", marginRight: "150px" }}
    >
      <div className={`Aptitudes ${theme}`}>
        <div className={`Aptitudes-left ${theme}`}>
          <div className={`conoce-title ${theme}`}>
            <img src={ImageA} alt="Imagen de aptitudes" />
            <h1>{language === "es" ? "Aptitudes" : "Skills"}</h1>
          </div>

          <ul>
            <li>
              {theme === "light" ? (
                <FaUsers size={30} />
              ) : (
                <FaUsers size={30} color="#cacaca" />
              )}

              {language === "es"
                ? "Fomentar el trabajo en equipo"
                : "To promote teamwork"}
            </li>
            <li>
              {theme === "light" ? (
                <FaBookReader size={30} />
              ) : (
                <FaBookReader size={30} color="#cacaca" />
              )}
              {language === "es"
                ? "Dedicado al aprendizaje continuo y el desarrollo personal"
                : "Continuous learning and personal growth"}
            </li>
            <li>
              {theme === "light" ? (
                <FaPencilRuler size={30} />
              ) : (
                <FaPencilRuler size={30} color="#cacaca" />
              )}

              {language === "es"
                ? "Pensador creativo con capacidad para resolver problemas complejos"
                : "Creative thinker with the ability to solve complex problems"}
            </li>
            <li>
              {theme === "light" ? (
                <FaChalkboardUser size={30} />
              ) : (
                <FaChalkboardUser size={30} color="#cacaca" />
              )}

              {language === "es"
                ? "Fascinado por la experiencia de usuario y el diseño de servicios"
                : "Fascinated by user experience and service design"}
            </li>
          </ul>
        </div>
        <div className={`Aptitudes-right ${theme}`}>
          <div className={`conoce-title ${theme}`}>
            <img src={ImagenB} alt="Imagen de aptitudes" />
            <h1>{language === "es" ? "Idiomas" : "Languages"}</h1>
          </div>

          <div>
            {idiomas.map((idioma) => (
              <div key={idioma.id} className={`container ${theme}`}>
                <div className={`content ${theme}`}>
                  
                  <p>{idioma.icon}</p>
                  <div className={`content-description ${theme}`}>
                    <span>{idioma.name}</span>
                  {idioma.description}
                  </div>
                </div>
                <div className={`skill ${theme}`}>
                  <div
                    className={`progress ${theme}`}
                    style={{ "--width": `${idioma.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Aptitudes;
