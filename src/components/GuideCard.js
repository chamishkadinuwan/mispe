// src/components/GuideCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const GuideCard = ({ guide }) => {
  return (
    <div className="guide-card">
      <div className="guide-header">
        <div 
          className="guide-avatar" 
          style={{ backgroundImage: `url(${guide.photo})` }}
        ></div>
        <div className="guide-info">
          <h3>{guide.name}</h3>
          <p className="specialty">{guide.specialty}</p>
          <div className="rating">
            <i className="fas fa-star"></i> {guide.rating} ({guide.reviews} reviews)
          </div>
        </div>
      </div>
      
      <div className="guide-details">
        <div className="detail">
          <i className="fas fa-language"></i>
          <span>{guide.languages.join(', ')}</span>
        </div>
        <div className="detail">
          <i className="fas fa-map-marker-alt"></i>
          <span>{guide.location}</span>
        </div>
        <div className="detail">
          <i className="fas fa-user-friends"></i>
          <span>Max group: {guide.maxGroupSize} people</span>
        </div>
      </div>
      
      <div className="guide-footer">
        <div className="price">${guide.hourlyRate}/hour</div>
        <Link to={`/guide/${guide.id}`} className="btn outline">View Profile</Link>
      </div>
    </div>
  );
};

export default GuideCard;