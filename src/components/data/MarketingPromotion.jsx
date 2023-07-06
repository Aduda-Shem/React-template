import React from 'react';
import '../../App.css';
import promotionImage from '../images/portfolio6.jpg';
import promotion2Image from '../images/photo_2023-06-26_16-29-53.jpg';
import promotion3Image from '../images/pexels-alex-knight-2599244.jpg';
import promotion4Image from '../images/pexels-luis-gomes-546819.jpg';



const MarketingPromotion = () => {

  return (
    <div className="marketing-promotion-container">
      <h2 className="marketing-promotion-title">Our Promotions. Come first come serve</h2>
      <div className="marketing-promotion-content">
      <div className="promotion-item">
          <img src={promotion2Image} alt="Promotion 2" />
          <h3>Tech tools</h3>
          <p>Buy 2, Get 1 Free on selected items!</p>
        </div>
        <div className="promotion-item">
          <img src={promotionImage} alt="Promotion 1" />
          <h3>Home Products</h3>
          <p>Get 20% off on all products!</p>
        </div>
        <div className="promotion-item">
          <img src={promotion3Image} alt="Promotion 2" />
          <h3>Tech tools</h3>
          <p>Buy 2, Get 1 Free on selected items!</p>
        </div>
        <div className="promotion-item">
          <img src={promotion4Image} alt="Promotion 1" />
          <h3>Home Products</h3>
          <p>Get 20% off on all products!</p>
        </div>
      </div>
    </div>
  );
};

export default MarketingPromotion;
