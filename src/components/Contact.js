import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm('service_eop5xmi', 'template_jcdekph', e.target, 'sXIVilOzE7GItuHWb')
      .then((result) => {
        console.log('Message sent:', result.text);
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Message failed:', error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-box">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="6"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
