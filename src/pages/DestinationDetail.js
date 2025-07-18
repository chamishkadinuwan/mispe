// src/pages/DestinationDetail.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GuideCard from '../components/GuideCard';
import { destinations, guides } from '../data/mockData';
import './DestinationDetail.css';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === parseInt(id));
  
  const [selectedDate, setSelectedDate] = useState('');
  const [duration, setDuration] = useState(4);
  const [groupSize, setGroupSize] = useState(2);
  
  if (!destination) {
    return (
      <div className="destination-detail">
        <div className="container">
          <div className="not-found">
            <h2>Destination not found</h2>
            <Link to="/destinations" className="btn primary">Browse Destinations</Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Filter guides that serve this destination
  const destinationGuides = guides.filter(guide => 
    guide.destinations.includes(destination.name.split(' ')[0])
  );

  return (
    <div className="destination-detail">
      <div className="destination-hero" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="hero-overlay" style={{paddingLeft:'20px'}}>
          <div className="container">
            <h1>{destination.name}</h1>
            <p>{destination.location}</p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="destination-content">
          <div className="main-content">
            <div className="section">
              <h2>About {destination.name}</h2>
              <p>{destination.description}</p>
            </div>
            
            <div className="section">
              <h2>Highlights</h2>
              <ul className="highlights">
                {destination.highlights.map((highlight, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i> {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="section">
              <h2>Best Time to Visit</h2>
              <div className="best-time">
                <i className="fas fa-calendar-alt"></i>
                <span>{destination.bestTime}</span>
              </div>
            </div>
          </div>
          
          <div className="sidebar">
            <div className="booking-box">
              <h3>Plan Your Visit</h3>
              
              <div className="form-group">
                <label>Select Date</label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>Duration (hours)</label>
                <select 
                  value={duration} 
                  onChange={(e) => setDuration(e.target.value)}
                >
                  {[2, 4, 6, 8].map(hours => (
                    <option key={hours} value={hours}>{hours} hours</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Group Size</label>
                <select 
                  value={groupSize} 
                  onChange={(e) => setGroupSize(e.target.value)}
                >
                  {[1, 2, 4, 6, 8, 10].map(size => (
                    <option key={size} value={size}>{size} {size === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
              
              <button className="btn primary full-width">
                Find Available Guides
              </button>
            </div>
            
            <div className="quick-facts">
              <h3>Quick Facts</h3>
              <ul>
                <li>
                  <i className="fas fa-tag"></i>
                  <span>Category</span>
                  <strong>{destination.category}</strong>
                </li>
                <li>
                  <i className="fas fa-star"></i>
                  <span>Rating</span>
                  <strong>{destination.rating}/5.0</strong>
                </li>
                <li>
                  <i className="fas fa-user-friends"></i>
                  <span>Guides Available</span>
                  <strong>{destination.guidesAvailable}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="guides-section">
          <div className="section-header">
            <h2>Guides for {destination.name}</h2>
            <p>Experienced local guides to enhance your visit</p>
          </div>
          
          {destinationGuides.length > 0 ? (
            <div className="guides-grid">
              {destinationGuides.map(guide => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          ) : (
            <div className="no-guides">
              <i className="fas fa-user-friends"></i>
              <h3>No guides currently available for this destination</h3>
              <p>Check back later or browse our other destinations</p>
              <Link to="/destinations" className="btn outline">Browse Destinations</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;