import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useForm } from '@formspree/react';
import '../Components/Contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm('xeqbjynn');

  const handleFormSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      if (!values.name || !values.email || !values.message) {
        throw new Error('Please fill out all fields.'); // Throw an error if any field is empty
      }
      
      await handleSubmit(values);
      setStatus({ success: true }); // Set a success status
    } catch (error) {
      setStatus({ success: false, error: error.message }); // Set an error status with the error message
    }
    setSubmitting(false);
  };

  return (
    <div className='contact' id='contact'>
      <h1 className='contact-title'>Contact Me</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, status }) => (
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
        <p className='contact-linkedin'>LinkedIn: <a href='https://www.linkedin.com/in/brett-wallin/' target="_blank" rel="noopener noreferrer"> Click Here</a></p>
      </div>
    </div>
  );
}




