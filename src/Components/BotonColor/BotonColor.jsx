// BotonColor.js
import React from "react";
import "./BotonColor.css";
import { useThemeContext } from "../../Context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useLanguageContext } from "../../Context/LanguageContext";
import { IoLanguageSharp } from "react-icons/io5";

function BotonColor() {
  const { theme, setTheme } = useThemeContext();
  const { language, setLanguage } = useLanguageContext();
  function handleClick() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  function handleLenguage() {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  }

  return (
    <div>
      <ul className="ul-theme">
        <span
          onClick={handleClick}
          className={`theme-button ${theme === "light" ? "light" : "dark"}`}
        >
          {theme === "light" ? (
            <MdDarkMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </span>
        <span
          onClick={handleLenguage}
          className={`theme-button ${theme === "light" ? "light" : "dark"}`}
        >
          {theme === "light" ? (
           <IoLanguageSharp size={20}/>
          ) : (
          <IoLanguageSharp size={20}/>

          )}
        </span>
      </ul>
    </div>
  );
}

export default BotonColor;
