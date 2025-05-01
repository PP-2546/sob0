import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const username = location.state?.user || 'ผู้ใช้';

  return (
    <div>
      <h2>สวัสดีคุณ {username}</h2>
      <p>นี่คือหน้า Home</p>
    </div>
  );
};

export default Home;
