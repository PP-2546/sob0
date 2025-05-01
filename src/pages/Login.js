import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './../App.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (
      savedUser &&
      formData.username === savedUser.username &&
      formData.password === savedUser.password
    ) {
      navigate('/dashboard', { state: { user: savedUser.username } });
    } else {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>เข้าสู่ระบบ</h2>
      {error && <p className="error">{error}</p>}
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
      <button type="submit">เข้าสู่ระบบ</button>
      <p>ยังไม่มีบัญชี? <Link to="/register">สมัครสมาชิก</Link></p>
    </form>
  );
};

export default Login;
