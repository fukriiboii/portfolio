import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(); // ✅ LÄGG TILL REF

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_b117i0n',          // ✔ ditt service ID
        'template_e4letwn',        // ✔ ditt template ID
        formRef.current,           // ✔ viktigt!!! använd ref
        'z4rvFy_XnK60Orjdu'        // ✔ public key
      )
      .then(
        () => {
          alert('Your message has been sent!');
          setFormData({ name: '', email: '', message: '' });
          setIsLoading(false);
        },
        (error) => {
          console.error('EmailJS error:', error);
          alert('Failed to send message. Please try again.');
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-500 uppercase tracking-wider">Get in touch</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Contact Me</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 mb-8"></div>

        {/* Socials */}
        <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="https://www.linkedin.com/in/fahri-kuzey-3540a7177/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-gray-700 hover:text-blue-600 transition"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>

          <a
            href="https://github.com/fukriiboii/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg text-gray-700 hover:text-gray-500 transition"
          >
            <FaGithub size={24} /> GitHub
          </a>

          <a
            href="mailto:Fahrikuzey@hotmail.com"
            className="flex items-center gap-2 text-lg text-gray-700 hover:text-red-600 transition"
          >
            <FaEnvelope size={24} /> Fahrikuzey@hotmail.com
          </a>

          <span className="flex items-center gap-2 text-lg text-gray-700">
            <FaPhone size={24} /> +46 73 397 64 25
          </span>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <label htmlFor="message" className="text-lg font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
