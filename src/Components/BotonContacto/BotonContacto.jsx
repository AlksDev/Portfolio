import './BotonContacto.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

import { useThemeContext } from "../../Context/ThemeContext";
function BotonContacto() {

    const { theme } = useThemeContext();
  const botones = [
    {
      id: 1,
      name: "Github",
      link: "https://github.com/AlksDev",
      icon: <FaGithub size={20} />,
    },
    {
      id: 2,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/kevin-urrutia-0b9a8b1b3/",
      icon: <FaLinkedin size={20}/>,
    },
    {
      id: 3,
      name: "Whatsapp",
      link: "https://wa.me/+573105241711",
      icon: <FaWhatsapp size={20} />,
    },
    {
      id:4,
      name: "Instagram",
      link: "https://www.instagram.com/kevinur21/",
      icon:<LuInstagram size={20}/>
    }
  ];

  return (
    <div className={`botones-contacto ${theme}`}>
      <div className={`contactame-botones ${theme}`}>
      {botones.map((boton, index) => (
        <a key={index} href={boton.link} className={`icon ${theme}`} target="_blank" rel="noopener noreferrer">{boton.icon}</a>
      ))}

      <hr className='hr' />
      </div>
    </div>
  );
}

export default BotonContacto;
