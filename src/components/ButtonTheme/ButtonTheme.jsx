import React from 'react';
import './ButtonTheme.css';
import { IoSunnyOutline } from 'react-icons/io5'; // Ícono de sol
import { IoMoon } from 'react-icons/io5'; // Ícono de luna

function ButtonTheme({ toggleTheme, theme }) {
  return (
    <div>
      <button onClick={toggleTheme} className={`button ${theme}`}>
        {/* El ícono de sol o luna cambia según el tema */}
        {theme === 'light' ? (
          <IoMoon  size={25} /> // Ícono de luna para el tema claro
        ) : (
          <IoSunnyOutline  size={25} /> // Ícono de sol para el tema oscuro
        )}
      </button>
    </div>
  );
}

export default ButtonTheme;
