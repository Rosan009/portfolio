import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/contacts', contact)
      .then(response => {
        alert('Message sent successfully!');
        setContact({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
      });
  };
  return (
    <section id="contact">
      <h2 className='head'>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={contact.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
