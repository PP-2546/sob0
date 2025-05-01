import React, { useState } from 'react';
import './../App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('กรุณากรอกอีเมลที่ถูกต้อง');
      return;
    }

    localStorage.setItem('contactMessage', JSON.stringify(formData));

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="thank-you-message">
        <h2>ขอบคุณที่ติดต่อเรา!</h2>
        <p>เราจะตอบกลับคุณโดยเร็วที่สุด</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>ติดต่อเรา</h2>

      <input 
        name="name" 
        placeholder="ชื่อของคุณ" 
        value={formData.name}
        onChange={handleChange} 
        required 
      />
      <input 
        name="email" 
        type="email" 
        placeholder="อีเมลของคุณ" 
        value={formData.email}
        onChange={handleChange} 
        required 
      />
      <textarea 
        name="message" 
        placeholder="ข้อความ" 
        value={formData.message}
        onChange={handleChange} 
        required 
      />
      <button type="submit">ส่งข้อความ</button>
    </form>
  );
};

export default ContactForm;
