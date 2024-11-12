import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function MenuHamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="menu-hamburger">
            <GiHamburgerMenu   alt="Menu" width={30} height={30} className='cursor-pointer lg:hidden' onClick={toggleMenu} />
              
        </div>
    )
}

export default MenuHamburger