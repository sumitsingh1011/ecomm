import React, { useState } from 'react';
import './Descripiton.css';

const Description = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='descriptionbox'>
      {/* Navigation Tabs */}
      <div className="descriptionbox-navigator">
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`} 
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div 
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : 'fade'}`} 
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (1365)
        </div>
      </div>

      {/* Conditional Content Display */}
      <div className="descriptionbox-description">
        {activeTab === 'description' ? (
          <p>Dukan is a comprehensive e-commerce platform designed to provide seamless shopping experiences for users. Whether you're looking for the latest trends, essential products, or unique finds, our app offers a vast selection across categories like fashion, electronics, home goods, beauty, and more.</p>
        ) : (
          <p>Customer Reviews: ⭐⭐⭐⭐⭐ (4.8/5 based on 1365 reviews)</p>
        )}
      </div>
    </div>
  );
}

export default Description;
