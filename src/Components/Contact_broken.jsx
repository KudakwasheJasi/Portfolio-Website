import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// Validation schema using Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
});

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const sendEmail = (values, { resetForm }) => {
    emailjs.send(
      'service_sr6iipy',
      'template_43bhmbq',
      {
        name: values.name,
        email: values.email,
        message: `You got a new message from: ${values.name}\n\nEmail: ${values.email}\n\nMessage: ${values.message}`,
      },
      'GArNQY_cFjXl8rT-a'
    )
    .then(() => {
      setFormStatus('success');
      resetForm();
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    })
    .catch(() => {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="contact" className="bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
          <div className="h-1 w-20 bg-blue-400 mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info & Map */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <motion.div 
                className="flex gap-4 items-start"
                whileHover={{ x: 5 }}
              >
                <div className="bg-blue-500 rounded-lg p-4 mt-1">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                  <p className="text-gray-400">
                    Dzivaresekwa 4, Harare
                    <br />
                    Zimbabwe
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                className="flex gap-4 items-start"
                whileHover={{ x: 5 }}
              >
                <div className="bg-blue-500 rounded-lg p-4 mt-1">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-400">
                    <a href="mailto:your@email.com" className="hover:text-blue-400">
                      your@email.com
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="flex gap-4 items-start"
                whileHover={{ x: 5 }}
              >
                <div className="bg-blue-500 rounded-lg p-4 mt-1">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                  <p className="text-gray-400">
                    <a href="tel:+263777123456" className="hover:text-blue-400">
                      +263 77 712 3456
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, link: '#', label: 'LinkedIn' },
                  { icon: FaGithub, link: '#', label: 'GitHub' },
                  { icon: FaTwitter, link: '#', label: 'Twitter' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    className="bg-gray-800 hover:bg-blue-500 text-white p-4 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13837.709212669186!2d31.0521299!3d-17.8292224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4b9e91783c3%3A0xd704c1b99e7ae3df!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1694656518723!5m2!1sen!2sus"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                title="Harare Location Map"
                className="rounded-lg shadow-lg border border-gray-700"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={ContactSchema}
                onSubmit={sendEmail}
              >
                {({ isSubmitting, isValid, dirty }) => (
                  <Form className="space-y-6">
                    {/* Status Messages */}
                    {formStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg text-sm"
                      >
                        ✓ Message sent successfully! I'll get back to you soon.
                      </motion.div>
                    )}
                    {formStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg text-sm"
                      >
                        ✗ Failed to send message. Please try again.
                      </motion.div>
                    )}

                    {/* Name Field */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-white font-medium mb-2">Name</label>
                      <Field
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                      <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                    </motion.div>

                    {/* Message Field */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-white font-medium mb-2">Message</label>
                      <Field
                        name="message"
                        as="textarea"
                        rows="5"
                        placeholder="Tell me about your project..."
                        className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      />
                      <ErrorMessage name="message" component="div" className="text-red-400 text-sm mt-1" />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || !isValid || !dirty}
                      className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </Form>
                )}
              </Formik>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Map */}
        <motion.div className="mt-8 lg:hidden" variants={itemVariants}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13837.709212669186!2d31.0521299!3d-17.8292224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4b9e91783c3%3A0xd704c1b99e7ae3df!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1694656518723!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            title="Harare Location Map"
            className="rounded-lg shadow-lg border border-gray-700"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

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
