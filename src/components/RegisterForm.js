// src/components/RegisterForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterForm.css'; // Import the CSS file


const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Simulate successful registration
    console.log('User registered successfully');

    // Automatically navigate to LoginForm after successful registration
    navigate('/login');
  };

  return (
    <div>
      <h2>Registration</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <Link to="/login">
        <button onClick={handleRegister}>Register</button>
      </Link>
    </div>
  );
};

export default RegisterForm;
