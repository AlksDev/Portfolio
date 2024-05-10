// import "./Inicio.css";
import { useThemeContext } from "../../Context/ThemeContext";
import { useLanguageContext } from "../../Context/LanguageContext";
import ImagePerfil from "../../assets/perfil.png";
import "./Iniciof.css";
import Typewriter from "typewriter-effect";
import BotonContacto from "../../Components/BotonContacto/BotonContacto";
import ConoceMas from "../../Components/ConoceMas/ConoceMas";
function Inicio() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const scrollToBottom = () => {
    const inicioSection = document.getElementById("inicio");
    if (inicioSection) {
      window.scrollTo({
        top: inicioSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <header className={`header ${theme}`}>
        <img src={ImagePerfil} className="image" alt="image perfil" />
        <h1>{language === "es" ? "Hola, Yo soy" : "Hello, I'm"}</h1>
        {language === "es" ? (
          <span>
            <Typewriter
              options={{
                strings: [
                  "Kevin Urrutia",
                  "Ingeniero de sistemas",
                  "Desarrollador Full-Stack",
                ],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </span>
        ) : (
          <span>
            <Typewriter
              options={{
                strings: [
                  "Kevin Urrutia",
                  "Systems Engineer",
                  "Full-Stack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
          </span>
        )}
        <div className={`header-link ${theme}`}>
          <button>
            {language === "es" ? "Ir al portafolio" : "Go to portfolio"}
          </button>
          <a href="#inicio" onClick={scrollToBottom}>
            {language === "es" ? "Conoce mas 🡢" : "Know more 🡢"}
          </a>
        </div>
      </header>
      <div className="boton-contacto-inicio">

      <BotonContacto />
      </div>
      <section className={`section ${theme}`} id="inicio">
        <div> 
          <ConoceMas />  
        </div>
      </section>
      <section href="contacto">
        <h1>{language === "es" ? "Contactame" : "Contact me"}</h1>
        
      </section>
    </div>
  );
}

export default Inicio;
