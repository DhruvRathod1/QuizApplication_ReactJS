import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import myVideo from './video.mp4';
import backgroundImage from './login image m.jpg'; // Update the path to your video file


function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    // Simulated login logic for demonstration purposes
    if (username === 'student' && password === 'student') {
      onLogin('student');
    } else {
      alert('Invalid login credentials');
    }
  }

  return (
    <>
    <img src={backgroundImage} alt="Background" className="BackgroundImage" />

    <video autoPlay loop muted className="VideoBackground">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    <div className="BackgroundImage">
      <div className="LoginContainer">
        <div className="LoginForm">
          <h2>LOGIN</h2>
          <h3 className="light-h3">Please login with your Username & Password</h3>
          <br />
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label></label>
            <button type="button1" onClick={handleLogin}>
              Login
            </button>
          </form>
          <p>Forgot password?</p>
        </div>
        
      </div>
      
    </div>
        </>
  );
}

export default Login;