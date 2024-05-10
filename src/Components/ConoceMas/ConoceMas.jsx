import React from "react";
import "./ConoceMas.css";
import { useThemeContext } from "../../Context/ThemeContext";
import { useLanguageContext } from "../../Context/LanguageContext";
import ImageP from "./images/git.gif";
import Interest from "./images/interest.gif";
import sobremi from "./images/sobremi.gif";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

function ConoceMas() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const intereses = ["Desarrollo Web", "Inteligencia artificial IA","Diseño de productos y servicio", "Desarrollo de software"];
const interest =["Web development", "Artificial intelligence IA","Product and service design", "Software development"];
  return (
    <ScrollAnimation
      animateIn="slideInLeft"
      animateOut="fadeOut"
      style={{ marginLeft: "150px", marginRight: "150px" }}
    >
      <div className={`card ${theme}`}>
        <div className={`conoce-title-left ${theme}`}>
          <div className={`conoce-title ${theme}`}>
            <img src={sobremi} alt="git" className="git" />
            <h1>{language === "es" ? "Sobre mi" : "About me"}</h1>
          </div>
          <div className={`description-conoce ${theme}`}>
            {language === "es" ? (
              <span>
                Un ingeniero apasionado en la creacion de experiencias
                digitales. Disfruto participar en proyectos de programación en
                todas las etapas del proyecto, desde su concepción hasta su
                puesta en marcha.
              </span>
            ) : (
              <span>
                An engineer passionate about creating digital experiences. I
                enjoy participating in programming projects at all stages. of
                the project, from its conception to its implementation.
              </span>
            )}
            {/* <img src={Conocemas} alt="" srcset="" /> */}
          </div>
        </div>
        <hr className={`hr1 ${theme}`} />
        <div className={`conoce-title-right ${theme}`}>
          <div className={`conoce-title ${theme}`}>
            <img src={Interest} alt="git" className="git" />
            <h1>{language === "es" ? "Intereses" : "Interests"}</h1>
          </div>
          <div className={`description-conoce ${theme}`}>
            {language === "es" ? (
                <ul>
                  {intereses.map((interes,index) => (
                    <li key={index}>{interes}</li>
                  ))}
                  
                </ul>)
                : (
                  <ul>
                    {interest.map((interes,index) => (
                      <li key={index}>{interes}</li>
                    ))}
                    </ul>
                )}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default ConoceMas;
