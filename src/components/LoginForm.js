// src/components/LoginForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the CSS file


const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate successful login
    console.log('User logged in successfully');

    // Automatically navigate to Dashboard after successful login
    navigate('/dashboard');
  };

  return (
    <form>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <Link to="/dashboard">
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </Link>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
