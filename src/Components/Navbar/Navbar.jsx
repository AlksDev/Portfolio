import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo1.png";
import BotonColor from "../BotonColor/BotonColor";
import { useThemeContext } from "../../Context/ThemeContext";
import { useLanguageContext } from "../../Context/LanguageContext";
import BotonCv from "../Botoncv/BotonCv";

const Links = [
  {
    name: "Home",
    nombre: "Inicio",
    links: "/start",
    link: "/inicio",
  },
  {
    name: "Services",
    nombre: "Servicios",
    links: "/services",
    link: "/servicios",
  },
  {
    name: "About me",
    nombre: "Sobre mi",
    links: "/about",
    link: "/sobremi",
  },
  {
    name: "Projects",
    nombre: "Proyectos",
    links: "/projects",
    link: "/proyectos",
  },
  {
    name: "Contact",
    nombre: "Contacto",
    links: "/start#contact",
    link: "/inicio#contacto",
    href: "#contacto"
  },
];

function Navbar() {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <nav className={`nav ${scrolling ? "scrolled" : ""} ${theme}`}>
        <Link className="logo-container" to="/" onClick={scrollToTop}>
          <img src={Logo} alt="Logo principal" className="logo" />
        </Link>
        
        <div className={`ul ${menuOpen ? `open ${theme}` : `${theme}`}`}>
          {Links.map((x, index) => (
            <li key={index} className="li">
              <Link
                to={x.link}
                className={`link ${theme}`}
                onClick={() => {
                  setMenuOpen(false);
                  scrollToTop();
                  if (x.link === "/inicio#contacto") {
                    scrollToBottom();
                  }
                 }}
                {...(x.link === "/inicio#contacto" ? { href: x.href } : null)}
              >
                {language === "en" ? <p>{x.name}</p> : <p>{x.nombre}</p>}
              </Link>
            </li>
          ))}
          <BotonCv />
        </div>
        <BotonColor />
        <div className={`menu-icon ${theme}`} onClick={handleMenuToggle}>
          <span />
          <span />
          <span />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
