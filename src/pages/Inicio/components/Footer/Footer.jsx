import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';
import imagen from './img/footer.svg';

function Footer({ toggleLanguage, language, theme }) {
  const form = useRef();

  // Función para enviar el email
  const sendEmail = (e) => {
    e.preventDefault();

    // Enviar formulario con EmailJS
    emailjs
      .sendForm('service_lzugcwl', 'template_kc7hwyf', form.current, {
        publicKey: 'SmqqwXI_YgOM867wx',
      })
      .then(
        () => {
          console.log('Enviado correctamente!');
          form.current.reset();  // Limpiar los datos del formulario después de un envío exitoso
        },
        (error) => {
          console.log('Algo salió mal...', error.text);
        }
      );
  };

  return (
    <div className={`footer ${theme}`} id="contact">
      <div className="imagen-footer">
        <img src={imagen} alt="Imagen de pie de página" />
      </div>
      <div>
        <form
          ref={form}  // Vincula el formulario al ref
          onSubmit={sendEmail}  // Llama a la función sendEmail al enviar el formulario
          className={`form ${theme}`}
        >
          <div>
            <input
              type="text"
              name="user_name"  // Asegúrate de que coincida con {{user_name}} en tu template
              placeholder={language === 'es' ? 'Nombre' : 'First Name'}
            />
            <input
              type="text"
              name="last_name"  // Asegúrate de que coincida con {{last_name}} en tu template
              placeholder={language === 'es' ? 'Apellido' : 'Last Name'}
            />
          </div>
          <input
            className={`content email ${theme}`}
            type="email"
            name="user_email"  // Asegúrate de que coincida con {{user_email}} en tu template
            placeholder={language === 'es' ? 'Correo Electronico' : 'Email'}
          />
          <input
            className={`content subject ${theme}`}
            type="text"
            name="asunto"  // Asegúrate de que coincida con {{asunto}} en tu template
            placeholder={language === 'es' ? 'Asunto' : 'Subject'}
          />
          <textarea
            className={`content message ${theme}`}
            name="user_message"  // Asegúrate de que coincida con {{user_message}} en tu template
            placeholder={language === 'es' ? 'Mensaje' : 'Message'}
          />
          <button type="submit">
            {language === 'es' ? 'Enviar' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
