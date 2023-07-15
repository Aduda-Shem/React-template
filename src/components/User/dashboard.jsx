import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../items/Categories';
import './home.css';

const Userhome = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-title-container">
          <h1 className="home-title">ZedFour Collection</h1>
          <p className="home-subtitle">Discover the Latest Fashion Trends</p>
        </div>
        <nav className="home-navigation">
          <ul>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/styling-sessions">Styling Sessions</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
        </nav>
        
      </header>
      <section className="home-features">
        <div className="home-feature">
          <div className="home-feature-content">
            <h2 className="home-feature-title">Virtual Styling Sessions</h2>
            <p className="home-feature-description">
              Book a virtual styling session with our fashion experts to get personalized style advice and recommendations.
            </p>
          </div>
        </div>
        <div className="home-feature">
          <div className="home-feature-content">
            <h2 className="home-feature-title">Design Competition</h2>
            <p className="home-feature-description">
              Showcase your creative talent and compete for the leaderboard in our design competition.
            </p>
          </div>
        </div>
      </section>
      <main className="dashboard-main">
        <Categories />
        </main>
      <footer className="home-footer">&copy; 2023 Zedfour. All rights reserved.</footer>
    </div>
  );
};

export default Userhome;
