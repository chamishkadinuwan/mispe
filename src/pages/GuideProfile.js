// src/pages/GuideProfile.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { guides } from '../data/mockData';
import './GuideProfile.css';

const GuideProfile = () => {
  const { id } = useParams();
  const guide = guides.find(g => g.id === parseInt(id));
  
  const [bookingDate, setBookingDate] = useState('');
  const [duration, setDuration] = useState(4);
  const [groupSize, setGroupSize] = useState(2);
  
  if (!guide) {
    return (
      <div className="guide-profile">
        <div className="container">
          <div className="not-found">
            <h2>Guide not found</h2>
            <Link to="/guides" className="btn primary">Browse Guides</Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Calculate total price
  const totalPrice = guide.hourlyRate * duration;
  
  return (
    <div className="guide-profile">
      <div className="profile-header">
        <div className="container">
          <div className="header-content">
            <div 
              className="guide-avatar" 
              style={{ backgroundImage: `url(${guide.photo})` }}
            ></div>
            <div className="header-info">
              <h1>{guide.name}</h1>
              <p className="specialty">{guide.specialty}</p>
              <div className="rating">
                <i className="fas fa-star"></i> {guide.rating} <span>({guide.reviews} reviews)</span>
              </div>
              <div className="location">
                <i className="fas fa-map-marker-alt"></i> {guide.location}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="profile-content">
          <div className="main-content">
            <div className="section">
              <h2>About Me</h2>
              <p>{guide.about}</p>
            </div>
            
            <div className="section">
              <h2>Specialties & Experience</h2>
              <ul className="specialties">
                <li>
                  <i className="fas fa-certificate"></i>
                  <div>
                    <h3>{guide.specialty}</h3>
                    <p>{guide.experience} of experience</p>
                  </div>
                </li>
                {guide.certifications.map((cert, index) => (
                  <li key={index}>
                    <i className="fas fa-award"></i>
                    <div>
                      <h3>{cert}</h3>
                      <p>Certified professional</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="section">
              <h2>Languages</h2>
              <div className="languages">
                {guide.languages.map((lang, index) => (
                  <div key={index} className="language-tag">
                    <i className="fas fa-language"></i> {lang}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="section">
              <h2>Destination Expertise</h2>
              <div className="destinations">
                {guide.destinations.map((dest, index) => (
                  <Link key={index} to={`/destination/${index + 1}`} className="destination-tag">
                    {dest}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="section">
              <h2>Reviews</h2>
              <div className="reviews">
                <div className="review">
                  <div className="review-header">
                    <div className="reviewer">Sarah Johnson</div>
                    <div className="review-date">May 15, 2023</div>
                    <div className="review-rating">★★★★★</div>
                  </div>
                  <div className="review-content">
                    <p>Nimal was an excellent guide! His knowledge of Sri Lankan history brought ancient sites to life. He also took us to a wonderful local restaurant we never would have found on our own.</p>
                  </div>
                </div>
                
                <div className="review">
                  <div className="review-header">
                    <div className="reviewer">Thomas Müller</div>
                    <div className="review-date">April 2, 2023</div>
                    <div className="review-rating">★★★★★</div>
                  </div>
                  <div className="review-content">
                    <p>As a history enthusiast, I was impressed by Nimal's deep understanding of Sigiriya and Polonnaruwa. He answered all my questions with patience and shared fascinating insights.</p>
                  </div>
                </div>
              </div>
              
              <button className="btn outline">
                <i className="fas fa-plus"></i> Load More Reviews
              </button>
            </div>
          </div>
          
          <div className="sidebar">
            <div className="booking-box">
              <h3>Book This Guide</h3>
              
              <div className="price">
                ${guide.hourlyRate} <span>/ hour</span>
              </div>
              
              <div className="form-group">
                <label>Select Date</label>
                <input 
                  type="date" 
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
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
                  {[1, 2, 4, 6, 8].map(size => (
                    <option key={size} value={size}>{size} {size === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
              
              <div className="price-summary">
                <div className="price-item">
                  <span>${guide.hourlyRate} x {duration} hours</span>
                  <span>${guide.hourlyRate * duration}</span>
                </div>
                <div className="price-item">
                  <span>Service fee</span>
                  <span>$5</span>
                </div>
                <div className="total-price">
                  <span>Total</span>
                  <span>${totalPrice + 5}</span>
                </div>
              </div>
              
              <button className="btn primary full-width">
                <i className="fas fa-calendar-check"></i> Book Now
              </button>
              
              <div className="booking-note">
                <i className="fas fa-info-circle"></i>
                <p>Free cancellation up to 24 hours before the tour</p>
              </div>
            </div>
            
            <div className="contact-box">
              <h3>Contact Guide</h3>
              <p>Have questions before booking?</p>
              
              <div className="contact-options">
                <button className="btn outline full-width">
                  <i className="fas fa-envelope"></i> Send Message
                </button>
                <button className="btn outline full-width">
                  <i className="fas fa-phone"></i> Request Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;