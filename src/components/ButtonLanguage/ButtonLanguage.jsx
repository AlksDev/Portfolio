import React from 'react';
import { IoLanguage } from "react-icons/io5";

function ButtonLanguage({ toggleLanguage, language, theme }) {
    return (
        <div>
            <button onClick={toggleLanguage} className={`button ${theme}`}>
                <IoLanguage />
            </button>
        </div>
    );
}

export default ButtonLanguage;
