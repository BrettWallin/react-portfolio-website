import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useForm } from '@formspree/react';
import '../Components/Contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm('xeqbjynn');
  const [animateContact, setAnimateContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const contactSection = document.getElementById('contact');

      if (contactSection && !animateContact) {
        const sectionTop = contactSection.offsetTop;
        const sectionHeight = contactSection.offsetHeight;
        const windowHeight = window.innerHeight;

        const triggerOffset = windowHeight * 0.8;

        if (scrollPosition > sectionTop - triggerOffset && scrollPosition < sectionTop + sectionHeight) {
          setAnimateContact(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateContact]);

  const handleFormSubmit = async (values, { setSubmitting, setStatus, resetForm }) => {
    try {
      if (!values.name || !values.email || !values.message) {
        throw new Error('Please fill out all fields.');
      }

      await handleSubmit(values);
      setStatus({ success: true });
      resetForm();
    } catch (error) {
      setStatus({ success: false, error: error.message });
    }
    setSubmitting(false);
  };

  return (
    <div className={`contact ${animateContact ? 'contact-animate active' : ''}`} id="contact">
      <h1 className="contact-title">Contact Me</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, status, resetForm }) => (
          <Form className="contact-form">
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>
            {status && status.error && (
              <div className="error">{status.error}</div>
            )}
            {status && status.success && (
              <div className="success">Form submitted successfully!</div>
            )}
            <button type="submit" disabled={isSubmitting} className="form-button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {state.succeeded && <p>Thank you for your message!</p>}

      <div className='contact-additional'>
        <h3>Feel free to contact me directly:</h3>
        <p className='contact-phone'>Phone Number: (309)205-0226</p>
        <p className='contact-email'>Email: wallinbrett99@gmail.com</p>
        <p className='contact-linkedin'>LinkedIn: <a href='https://www.linkedin.com/in/brett-wallin/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>Click Here</a></p>
      </div>
    </div>
  );
}





