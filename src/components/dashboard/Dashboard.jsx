import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MarketingPromotion from '../data/MarketingPromotion';
import './Dashboard.css';
import Categories from '../items/Categories';

const Dashboard = () => {

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);

  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dashboard-title-container">
          <h1 className="dashboard-title">Welcome to ZedFour</h1>
          <p className="dashboard-subtitle">Revolutionizing Fashion for the Modern Generation</p>
        </div>
        <nav className="dashboard-navigation">
          <ul>
            <li>
              <Link to="/products">Browse Collection</Link>
            </li>
          
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="dashboard-features">
        <div className="dashboard-feature">
          <div className="dashboard-feature-content">
            <h2 className="dashboard-feature-title">Explore Trendsetting Styles</h2>
            <p className="dashboard-feature-description">
              Discover the latest fashion trends and curated collections to stay ahead in style.
            </p>
          </div>
        </div>

        <div className="dashboard-feature">
          <div className="dashboard-feature-content">
            <h2 className="dashboard-feature-title">Virtual Styling Sessions</h2>
            <p className="dashboard-feature-description">
                Book a virtual styling session with our fashion experts to get personalized style advice and recommendations.
            </p>
          </div>
        </div>

        <div className="dashboard-feature">
          <div className="dashboard-feature-content">
            <h2 className="dashboard-feature-title">Fashion Blog and Inspirations</h2>
            <p className="dashboard-feature-description">
                Stay updated with the latest fashion trends, style tips, and inspirations through our fashion blog.
            </p>
          </div>
        </div>

        <div className="dashboard-feature">
          <div className="dashboard-feature-content">
            <h2 className="dashboard-feature-title">Design competition</h2>
            <p className="dashboard-feature-description">
              Showcase your creative talent and compete for the leaderboard in our design competition.
            </p>
          </div>
        </div>
        
      </section>
      <main className="dashboard-main">
        <Categories onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
        </main>
      <main className="dashboard-main">
          <MarketingPromotion />
        </main>
      <footer className="dashboard-footer">&copy; 2023 ZedFour Fashion App. All rights reserved.</footer>
    </div>
  );
};

export default Dashboard;
