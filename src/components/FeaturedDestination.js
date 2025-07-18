// src/components/FeaturedDestination.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/FeaturedDestination.css'; // Assuming you have a CSS file for styling

const FeaturedDestination = ({ destination }) => {
  return (
    <div className="featured-destination-card" style={{}}>
      <div 
        className="destination-image "
        style={{ backgroundImage: `url(${destination.image})`,width:'450px' }}
      >
        <div className="destination-tag">{destination.category}</div>
      </div>
      <div className="destination-info">
        <h3>{destination.name}</h3>
        <p className="location"><i className="fas fa-map-marker-alt"></i> {destination.location}</p>
        <p className="description">{destination.shortDescription}</p>
        <div className="destination-footer">
          <Link to={`/destination/${destination.id}`} className="btn outline">
            Explore <i className="fas fa-arrow-right"></i>
          </Link>
          <div className="rating">
            <i className="fas fa-star"></i> {destination.rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestination;