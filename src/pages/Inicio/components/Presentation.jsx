import React from 'react';
import './Presentation.css';
import { ReactTyped } from "react-typed";
import { FaUserAstronaut } from "react-icons/fa";

function Presentation({ toggleTheme, theme, toggleLanguage, language }) {
  return (
    <div className={`presentation ${theme}`}>
      <div className={`text ${theme}`}>
        <div className={`Msg ${theme}`}>
          {language === 'es' ? (
            <h5>
              Bienvenido a mi portafolio
            </h5>
          ) : (
            <h3>
              Welcome to my portfolio
            </h3>
          )}
        </div>

        <h1 className={`greeting ${theme}`}>
          {language === 'es' ? (
            <>¡Hola! Yo soy Kevin  </>
          ) : (
            <>Hi! I'm Kevin </>
          )}
        </h1>

        <div className={`About ${theme}`}>
          {language === 'es' ? (
            <ReactTyped
              strings={["Ingeniero de sistemas", "Desarrollador Back-End"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          ) : (
            <ReactTyped
              strings={["Systems Engineer", "Back-End Developer"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          )}
        </div>
        <div className='about-description'>
          {
            language === 'es' ? (
              <span>
                Es un placer para mi tenerte por aqui. ✌️  <br />Te cuento un poco sobre mi y mis trabajos realizados.
              </span>
            ) : (
              <span>
                It's a pleasure for me to have you here.✌️ <br /> I'll tell you a little about myself and my work.

              </span>
            )
          }
        </div>
      </div>
      <div className='animation'>
        <FaUserAstronaut size={550} className='h' />
        <FaUserAstronaut size={500} className='m' />
        <FaUserAstronaut size={300} className='p' />

      </div>

    </div>
  );
}

export default Presentation;
