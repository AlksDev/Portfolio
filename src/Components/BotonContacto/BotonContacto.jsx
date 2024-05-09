import './BotonContacto.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useThemeContext } from "../../Context/ThemeContext";
function BotonContacto() {

    const { theme } = useThemeContext();
  const botones = [
    {
      id: 1,
      name: "Github",
      link: "https://github.com/AlksDev",
      icon: <FaGithub size={30} />,
    },
    {
      id: 2,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/kevin-urrutia-0b9a8b1b3/",
      icon: <FaLinkedin size={30}/>,
    },
    {
      id: 3,
      name: "Whatsapp",
      link: "https://wa.me/+5491131111111",
      icon: <FaWhatsapp size={30}/>,
    }
    // {
    //   id: 4,
    //   name: "Email",
    //   link: "#contactame",
    //   icon: <GrMail size={30}/>,
    // }
  ];

  return (
    <div>
      {botones.map((boton, index) => (
        <a key={index} href={boton.link} className={`icon ${theme}`} target="_blank" rel="noopener noreferrer">{boton.icon}</a>
      ))}
    </div>
  );
}

export default BotonContacto;
