import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulating a login check
    if (username === 'admin' && password === 'password') {
      // Successful login
      setLoginError(false);
      console.log('Login successful!');
      navigate('/dashboard');
    } else {
      // Incorrect credentials
      setLoginError(true);
      console.log('Login failed!');
    }

    // Clearing input fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="app-login">
        <div className="left-card">
          <div className="left-card-text">
            <div className="app-logo"></div>
            <p>Join millions of users worldwide</p>
          </div>
        </div>
        <div className="right-card">
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              id="login-btn"
              className={loginError ? 'escaped' : ''}
            >
              {loginError ? 'Try Again' : 'Log In'}
            </button>
            <div className="forgot-password">Forgot password?</div>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
