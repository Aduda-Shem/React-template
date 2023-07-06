import React, { useState } from 'react';
import Categories from '../items/Categories';
import MarketingPromotion from '../data/MarketingPromotion';
import '../../App.css';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const togglePopup = () => {
    setShowPopup((prevState) => !prevState);
  };

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    // Handle the link click logic here, such as navigating to the desired page
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="dots-menu">
          <div className="dots-icon" onClick={togglePopup}>
            <div className={`dot${showPopup ? ' active' : ''}`}></div>
            <div className={`dot${showPopup ? ' active' : ''}`}></div>
            <div className={`dot${showPopup ? ' active' : ''}`}></div>
          </div>
          {showPopup && (
            <div className="popup-menu">
              <ul>
                <li>
                  <a href="/profile" onClick={handleLinkClick}>
                    Profile
                  </a>
                </li>
                <li>
                  <a href="/logout" onClick={handleLinkClick}>
                    Logout
                  </a>
                </li>
                <li>
                  <a href="/other-page" onClick={handleLinkClick}>
                    Other Page
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <h1 className="dashboard-title">Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          <Categories onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
        </aside>
        <main className="dashboard-main">
          <MarketingPromotion />
        </main>
      </div>
      <footer className="dashboard-footer">&copy; 2023 E-Commerce Store. All rights reserved.</footer>
    </div>
  );
};

export default Dashboard;
