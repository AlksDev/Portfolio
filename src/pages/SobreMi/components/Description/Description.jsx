import React, { useState } from 'react';
import './Description.css';
import Sun from './assets/sun.png';
import Photo from './assets/Photo.jpg';
import { useNavigate } from 'react-router-dom';

function Description({ toggleLanguage, language, theme }) {
    // Redirección con useNavigate
    const navigate = useNavigate();
    
    // Control de si un desplazamiento ya está en curso
    const [isScrolling, setIsScrolling] = useState(false);
    // Función para hacer scroll al final de la página con retraso
    function scrollToBottom() {
        if (!isScrolling) { 
            setIsScrolling(true); 
            // Realizar el scroll hacia abajo después de 1 segundo
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight); // Scroll al final de la página
            }, 500); 
            setTimeout(() => {
                navigate('/');
                setIsScrolling(false); // Permitir nuevos desplazamientos después de la redirección
            }, 100); // Tiempo de espera para que se vea el desplazamiento antes de redirigir
        }
    }

    return (
        <div>
            <div className="about-me">
                <div className="text-about-me">
                    {language === 'es' ? (
                        <>
                            <p>
                                Hola, mi nombre es Kevin Urrutia. Actualmente vivo en Medellín, Colombia, tengo 27 años y soy ingeniero de sistemas. <br /> Me apasiona la programación, el desarrollo web y de software. He tenido la oportunidad de adquirir experiencia trabajando en diversos proyectos, lo que me ha permitido desarrollar habilidades tanto en el desarrollo front-end como back-end. <br /> Me gradué de la Fundación Universitaria Claretiana y, en mi constante búsqueda de superación, continúo ampliando mis conocimientos a través de estudios y proyectos personales.
                            </p>
                            <h5>
                                Si estás buscando un desarrollador comprometido y con experiencia, no dudes en contactarme.
                            </h5>
                            {/* Botón que ejecuta la función scrollToBottom con delay */}
                            <button className="contact-button" onClick={scrollToBottom}>
                                Ir al final
                            </button>
                        </>
                    ) : (
                        <>
                            <p>
                                Hello, my name is Kevin Urrutia. I currently live in Medellín, Colombia, I’m 27 years old, and I am a systems engineer. I am passionate about programming, web development, and software development. I have gained valuable experience working on various projects, which has allowed me to develop skills in both front-end and back-end development. I graduated from the Claretian University Foundation, and I am continuously expanding my knowledge through further studies and personal projects.
                            </p>
                            <h5>
                                If you're looking for a committed and experienced developer, feel free to contact me.
                            </h5>
                            {/* Botón que ejecuta la función scrollToBottom con delay */}
                            <button className="contact-button" onClick={scrollToBottom}>
                                Go to the bottom
                            </button>
                        </>
                    )}
                </div>
                <div className="photo-aboutme">
                    <img src={Photo} alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default Description;
