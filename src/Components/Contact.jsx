import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const service_id = import.meta.env.VITE_SERVICE_ID
const template_id = import.meta.env.VITE_TEMPLATE_ID
const public_key = import.meta.env.VITE_PUBLIC_KEY


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
      .sendForm(service_id, template_id, form.current, public_key)
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
    <div className='flex items-center justify-center h-screen'>
      <div className="flex flex-col items-center justify-center w-full lg:w-[70%] m-2">
      <h2 className='font-bold text-2xl text-center '>Contact Me</h2>
          <form ref={form} onSubmit={handleSubmit} className='mt-4 p-2 w-full border-2 shadow-md'>
            <div className="form-group">
              <label>Name:</label>
              <input
                className='bg-gray-300 w-full p-2 rounded'
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
                className='bg-gray-300 w-full p-2 rounded'
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
                className='bg-gray-300 w-full p-2 rounded'
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className='w-full bg-violet-700 p-2 text-white hover:bg-violet-800'>Submit</button>
          </form>
      </div>
    </div>
    </>
  );
};

export default ContactMe;
