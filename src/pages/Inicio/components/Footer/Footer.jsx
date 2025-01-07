import React from 'react'
import './Footer.css'
import imagen from './img/footer.svg'
function Footer({ toggleLanguage, language, theme }) {
    return (
        <div className={`footer ${theme}`}>
            <div className='imagen-footer'>
                <img src={imagen} alt="" />
            </div>
            <div>
                <form action="POST" className={`form ${theme}`}>
                    <div>
                        <input type="text" placeholder={language === 'es' ? 'Nombre' : ' First Name'} />
                        <input type="text" placeholder={language === 'es' ? 'Apellido' : 'Last Name'} />
                    </div>
                    <input className={`content email ${theme}`} type="email" placeholder={language === 'es' ? 'Correo Electronico' : 'Email'} />
                    <input className={`content subject ${theme}`} type="text" placeholder={language === 'es' ? 'Asunto' : 'Subject'} />
                    <input className={`content message ${theme}`} type="text" placeholder={language === 'es' ? 'Mensaje' : 'Message'} />
                    <button type="submit">{language === 'es' ? 'Enviar' : 'Send'}</button>
                </form>
            </div>
        </div>
    )
}

export default Footer
