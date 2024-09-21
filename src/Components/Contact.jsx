import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com';

// Validation schema using Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (values, { resetForm }) => {
    emailjs.send(
      'service_sr6iipy',
      'template_43bhmbq',
      {
        name: values.name,  // Sends the name
        email: values.email,  // Sends the email
        message: `You got a new message from: ${values.name}\n\nEmail: ${values.email}\n\nMessage: ${values.message}`, // Format message
      },
      'GArNQY_cFjXl8rT-a'
    )
    .then(() => {
      setFormStatus('Message sent successfully!');
      resetForm();
      // Hide the success message after 3 seconds
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    })
    .catch(() => {
      setFormStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="contact-container p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

      {/* Location Note with Link */}
      <div className="text-center mb-4">
        <p>
          Location: 
          <a 
            href="https://maps.app.goo.gl/88azNyNEPN476nDc9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 underline ml-1"
          >
            Dzivaresekwa 4, Harare
          </a>
        </p>
      </div>

      {/* Flex container for map and form */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Location Map */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13837.709212669186!2d31.0521299!3d-17.8292224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4b9e91783c3%3A0xd704c1b99e7ae3df!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1694656518723!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            title="Harare Location Map"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={ContactSchema}
            onSubmit={sendEmail}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 gap-4">
                <div>
                  <Field name="name" type="text" placeholder="Your Name" className="p-2 w-full border rounded"/>
                  <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1"/>
                </div>
                <div>
                  <Field name="email" type="email" placeholder="Your Email" className="p-2 w-full border rounded"/>
                  <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1"/>
                </div>
                <div>
                  <Field name="message" as="textarea" rows="4" placeholder="Your Message" className="p-2 w-full border rounded"/>
                  <ErrorMessage name="message" component="div" className="text-red-600 text-sm mt-1"/>
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white p-2 rounded">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </Form>
            )}
          </Formik>

          {formStatus && <p className="text-center mt-4">{formStatus}</p>}
        </div>
      </div>

      {/* Contact Links */}
      <div className="contact-links text-center mt-8">
        <p>
          WhatsApp me: 
          <a href="https://wa.me/263714141360" className="text-blue-500 underline ml-1">+263714141360</a>
        </p>
        <p>
          Call me: 
          <a href="tel:+263714141360" className="text-blue-500 underline ml-1">+263714141360</a>
        </p>
        <p>
          Facebook: 
          <a href="https://www.facebook.com/your-facebook-profile" className="text-blue-500 underline ml-1">Visit my Facebook</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
