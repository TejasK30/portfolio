import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {
  const form = useRef()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_yw082ki','template_mk9sldf', form.current, '_jg0QobFYQVuBb3JT')
        .then(() => {
          alert('Message sent Successfully')
          navigate('/')
        }),
        ()=>{
          alert('Failed to send the message, please try again later')
        }
      }

  return (
    <>
    <div className="contact-me-container">
        <h2 className='contact'>Contact Me</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className='Submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactMe;
