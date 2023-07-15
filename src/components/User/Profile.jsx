
import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: "John Doe",
    bio: "Fashion enthusiast and aspiring designer. Passionate about creating unique styles.",
    email: "john.doe@example.com",
    phone: "2547-417-123-98647",
    location: "Nairobi, KE",
    website: "www.johndoe.com",
    socialMedia: {
      instagram: "johndoe",
      twitter: "johndoe",
      linkedin: "johndoe"
    },

    achievements: [
      { title: "Fashion Award 2022", year: 2022 },
      { title: "Best Designer of the Year", year: 2021 }
    ],
    fashionStyles: ["Streetwear", "Bohemian", "Minimalist"],
    fashionBlog: "https://johndoe.com/blog",
  };

  return (
    <div className="profile-container">
          <header className="home-header">
        <span className="profile-contact-label">@ZedFour</span>
        <div className="social-media-links">
          <a href={`https://instagram.com/${user.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={`https://twitter.com/${user.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={`https://www.linkedin.com/in/${user.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
    
      </header>
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={process.env.PUBLIC_URL + '/images/login/login.jpg'} alt="Profile Avatar" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-bio">{user.bio}</p>
          <div className="profile-contact">
            <span className="profile-contact-label">Email:</span>
            <span className="profile-contact-value">{user.email}</span>
          </div>
          <div className="profile-contact">
            <span className="profile-contact-label">Phone:</span>
            <span className="profile-contact-value">{user.phone}</span>
          </div>
          <div className="profile-contact">
            <span className="profile-contact-label">Location:</span>
            <span className="profile-contact-value">{user.location}</span>
          </div>
          <div className="profile-contact">
            <span className="profile-contact-label">Website:</span>
            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="profile-contact-value">{user.website}</a>
          </div>
          <div className="profile-contact">
            <span className="profile-contact-label">Fashion Styles:</span>
            <div className="profile-contact-value">
              {user.fashionStyles.map((style, index) => (
                <span key={index} className="fashion-style-tag">{style}</span>
              ))}
            </div>
          </div>
          <div className="profile-achievements">
            <h2>Achievements</h2>
            <ul className="achievements-list">
              {user.achievements.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <span className="achievement-title">{achievement.title}</span>
                  <span className="achievement-year">{achievement.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="profile-actions">
            <button className="profile-edit-button">Edit Profile</button>
            <button className="profile-delete-button">Delete Account</button>
          </div>
        </div>
      </div>
   
      <footer className="profile-footer">&copy; 2023 Zedfour. All rights reserved.</footer>
    </div>
  );
};

export default Profile;
