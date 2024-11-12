import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ButtonTheme from '../ButtonTheme/ButtonTheme';
import Logo from './img/Logo.png';
import LogoDark from './img/LogoDark.png'; // Logo para tema oscuro
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import ButtonLanguage from '../ButtonLanguage/ButtonLanguage';
import ButtonCv from '../ButtonCv/ButtonCv';
const links = [
    { name: "Home", nombre: "Inicio", path: "/", href: "/" },
    { name: "About", nombre: "Sobre mi", path: "/about", href: "/about" },
    { name: "Contact", nombre: "Contacto", path: "/contact", href: "/contact" }
];

function Navbar({ toggleTheme, theme, toggleLanguage, language }) {
    return (
        <div className={`navbar-right ${theme}`}>
            {/* Logo */}
            <div className="Logo">
                <Link to={"/"} key={"Home"}>
                    {/* Mostrar el logo correspondiente según el tema */}
                    {theme === 'light' ? (
                        <img src={LogoDark} alt="Logo Dark" />
                    ) : (
                        <img src={Logo} alt="Logo Light" />
                    )}
                </Link>
            </div>

            {/* Menú hamburguesa */}
            <input id="menu-toggle" type="checkbox" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-button-container">
                <div className="menu-button">
                    {/* Si el checkbox está marcado, muestra la X */}
                    <span className="menu-icon">
                        <RxHamburgerMenu className="hamburger" size={30} />
                        <MdClose  className="cancel" size={30} />
                    </span>
                </div>
            </label>

            {/* Menú de navegación */}
            <div className={`navbar-links ${theme}`}>
                {language === 'es' ? (
                    links.map((link) => (
                        <Link
                            to={link.path}
                            key={link.name}
                            className={`navbar-right-items ${theme}`}
                        >
                            {link.nombre}
                        </Link>
                    ))
                ) : (
                    links.map((link) => (
                        <Link
                            to={link.path}
                            key={link.name}
                            className={`navbar-right-items ${theme}`}
                        >
                            {link.name}
                        </Link>
                    ))
                )}

                <ButtonCv toggleLanguage={toggleLanguage} language={language} theme={theme} />
                <ButtonTheme toggleTheme={toggleTheme} theme={theme} />
                <ButtonLanguage toggleLanguage={toggleLanguage} language={language} theme={theme} />
            </div>
        </div>
    );
}

export default Navbar;
