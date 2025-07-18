// src/components/DestinationCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <div 
        className="card-image" 
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="card-tag">{destination.category}</div>
      </div>
      <div className="card-content">
        <h3>{destination.name}</h3>
        <p className="location"><i className="fas fa-map-marker-alt"></i> {destination.location}</p>
        <p className="description">{destination.shortDescription}</p>
        <div className="card-footer">
          <div className="rating">
            <i className="fas fa-star"></i> {destination.rating}
            <span className="reviews">({destination.guidesAvailable} guides available)</span>
          </div>
          <Link to={`/destination/${destination.id}`} className="btn outline">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;