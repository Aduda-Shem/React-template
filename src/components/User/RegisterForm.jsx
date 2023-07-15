import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your registration logic here

    // Clearing input fields
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    // Redirect to a success page or any other desired location
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="app-register">
        <div className="left-card">
          <div className="left-card-text">
            <div className="app-logo"></div>
            <p>Create a new account</p>
          </div>
        </div>
        <div className="right-card">
          <h2>Register</h2>
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
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
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
            <div className="input-group">
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit" id="register-btn">
              Register
            </button>
          </form>
          <div className="register-link">
            <p>
              Already have an account?{' '}
              <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default RegisterForm;
