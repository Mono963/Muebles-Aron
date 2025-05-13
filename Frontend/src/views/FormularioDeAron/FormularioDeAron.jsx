import style from './FormularioDeAron.module.css';
import { validateFormulario } from "../../helpers/validateForm.js";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader.jsx';

const FormularioDeAron = () => {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const initialFormValues = {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    details: ""
  };
  
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = {
        name: values.name,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: parseInt(values.phoneNumber, 10), 
        details: values.details
      };

      if (isNaN(formData.phoneNumber)) {
        throw new Error('Número de teléfono inválido');
      }

      const phoneStr = values.phoneNumber.toString();
      if (phoneStr.length < 8 || phoneStr.length > 15) {
        throw new Error('El teléfono debe tener entre 8 y 15 dígitos');
      }

      const response = await fetch('http://localhost:8080/formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el formulario');
      }

      if (data.boolean === true) {
        setMessage({ 
          text: "¡Formulario enviado con éxito! Nos pondremos en contacto pronto.", 
          type: "success" 
        });
        resetForm();
      } else {
        throw new Error('La respuesta del servidor no fue exitosa');
      }
    } catch (error) {
      setMessage({ 
        text: error.message || "Ocurrió un error al enviar el formulario. Por favor intenta nuevamente.", 
        type: "error" 
      });
    } finally {
      setSubmitting(false);
    }
  };

  const hendleHome = () => {
    navigate("/");
  }

  return (
    <div className={style.fondo}>
      <Formik
        initialValues={initialFormValues}
        validate={validateFormulario}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <>
            {isSubmitting && <Loader />}
            <div className={style.form_wrapper}>
              <button 
                type='button' 
                onClick={hendleHome}
                className={style.button_home} 
              >
                Volver
              </button>

              <Form className={style.conteiner_register}>
                <h1 className={style.title}>Solicitud de contacto</h1>
                <p className={style.subtitle}>
                  Completa el siguiente formulario para consultas comerciales, colaboraciones o asesoramiento personalizado.
                </p>

                {message && (
                  <div className={`${style.messageUser} ${style[message.type]}`}>
                    {message.text}
                  </div>
                )}

                <div className={style.formGroup}>
                  <label htmlFor='name' className={style.label}>Nombre:</label>
                  <Field 
                    type='text' 
                    name='name' 
                    placeholder='Ingresa tu nombre' 
                    className={style.input} 
                  />
                  <ErrorMessage name='name' component='div' className={style.errors} />
                </div>

                <div className={style.formGroup}>
                  <label htmlFor='lastName' className={style.label}>Apellido:</label>
                  <Field 
                    type='text' 
                    name='lastName' 
                    placeholder='Ingresa tu apellido'
                    className={style.input} 
                  />
                  <ErrorMessage name='lastName' component='div' className={style.errors} />
                </div>

                <div className={style.formGroup}>
                  <label htmlFor='email' className={style.label}>Correo Electrónico:</label>
                  <Field 
                    type='email' 
                    name='email' 
                    placeholder='ejemplo@email.com' 
                    className={style.input} 
                  />
                  <ErrorMessage name='email' component='div' className={style.errors} />
                </div>

                <div className={style.formGroup}>
                  <label htmlFor='phoneNumber' className={style.label}>Teléfono:</label>
                  <Field 
                    type='text'
                    name='phoneNumber' 
                    placeholder='3418860776' 
                    className={style.input}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage name='phoneNumber' component='div' className={style.errors} />
                </div>

                <div className={style.formGroup}>
                  <label htmlFor='details' className={style.label}>Mensaje:</label>
                  <Field 
                    as='textarea'
                    name='details' 
                    placeholder='Escribe tu mensaje aquí...'
                    className={`${style.input} ${style.textarea}`} 
                    rows={5}
                  />
                  <ErrorMessage name='details' component='div' className={style.errors} />
                </div>

                <button 
                  type='submit' 
                  className={style.button} 
                  disabled={isSubmitting || !isValid || !dirty}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </Form>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormularioDeAron;