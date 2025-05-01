import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('กรุณากรอกอีเมลที่ถูกต้อง');
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone)) {
      alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
      return;
    }

    const newUser = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
      phone: formData.phone
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    alert('สมัครสมาชิกสำเร็จ!');
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>สมัครสมาชิก</h2>

      <input 
        name="username" 
        placeholder="ชื่อผู้ใช้" 
        value={formData.username}
        onChange={handleChange} 
        required 
      />
      <input 
        name="password" 
        type="password" 
        placeholder="รหัสผ่าน" 
        value={formData.password}
        onChange={handleChange} 
        required 
      />
      <input 
        name="confirmPassword" 
        type="password" 
        placeholder="ยืนยันรหัสผ่าน" 
        value={formData.confirmPassword}
        onChange={handleChange} 
        required 
      />
      <input 
        name="email" 
        type="email" 
        placeholder="อีเมล" 
        value={formData.email}
        onChange={handleChange} 
        required 
      />
      <input 
        name="phone" 
        type="text" 
        placeholder="เบอร์โทรศัพท์" 
        value={formData.phone}
        onChange={handleChange} 
        required 
      />

      <button type="submit">สมัครสมาชิก</button>
    </form>
  );
};

export default RegisterForm;
