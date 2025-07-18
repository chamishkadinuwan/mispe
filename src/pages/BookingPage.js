// src/pages/BookingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { destinations, guides } from '../data/mockData';
import './BookingPage.css';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [duration, setDuration] = useState(4);
  const [groupSize, setGroupSize] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  
  // Filter top-rated guides
  const topGuides = [...guides].sort((a, b) => b.rating - a.rating).slice(0, 4);
  
  // Filter popular destinations
  const popularDestinations = [...destinations].sort((a, b) => b.rating - a.rating).slice(0, 4);
  
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    // Here you would normally send booking data to your backend
    setStep(4);
  };
  
  const calculateTotal = () => {
    if (!selectedGuide) return 0;
    return (selectedGuide.hourlyRate * duration) + 5; // $5 service fee
  };

  return (
    <div className="booking-page">
      <div className="container">
        <div className="booking-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-title">Choose Option</div>
          </div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-title">Details</div>
          </div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-title">Confirm</div>
          </div>
          <div className={`step ${step >= 4 ? 'active' : ''}`}>
            <div className="step-number">4</div>
            <div className="step-title">Complete</div>
          </div>
        </div>
        
        {step === 1 && (
          <div className="step-content">
            <h2>How would you like to book?</h2>
            <p>Choose a guide or select a destination to find available guides</p>
            
            <div className="booking-options">
              <div className="option-section">
                <h3>Book by Guide</h3>
                <p>Select from our top-rated guides</p>
                
                <div className="guides-grid">
                  {topGuides.map(guide => (
                    <div 
                      key={guide.id} 
                      className={`guide-option ${selectedGuide?.id === guide.id ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedGuide(guide);
                        setSelectedDestination(null);
                      }}
                    >
                      <div 
                        className="guide-avatar" 
                        style={{ backgroundImage: `url(${guide.photo})` }}
                      ></div>
                      <div className="guide-info">
                        <h4>{guide.name}</h4>
                        <p>{guide.specialty}</p>
                        <div className="rating">
                          <i className="fas fa-star"></i> {guide.rating}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="option-section">
                <h3>Book by Destination</h3>
                <p>Select a destination to find available guides</p>
                
                <div className="destinations-grid">
                  {popularDestinations.map(destination => (
                    <div 
                      key={destination.id} 
                      className={`destination-option ${selectedDestination?.id === destination.id ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedDestination(destination);
                        setSelectedGuide(null);
                      }}
                    >
                      <div 
                        className="destination-image" 
                        style={{ backgroundImage: `url(${destination.image})` }}
                      ></div>
                      <div className="destination-info">
                        <h4>{destination.name}</h4>
                        <p>{destination.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="step-actions">
              <button 
                className="btn primary" 
                disabled={!selectedGuide && !selectedDestination}
                onClick={() => setStep(2)}
              >
                Continue
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="step-content">
            <h2>Booking Details</h2>
            <p>Provide details for your tour</p>
            
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input 
                    type="date" 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Duration (hours)</label>
                  <select 
                    value={duration} 
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  >
                    {[2, 4, 6, 8].map(hours => (
                      <option key={hours} value={hours}>{hours} hours</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Group Size</label>
                  <select 
                    value={groupSize} 
                    onChange={(e) => setGroupSize(e.target.value)}
                    required
                  >
                    {[1, 2, 4, 6, 8].map(size => (
                      <option key={size} value={size}>{size} {size === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Special Requests</label>
                  <textarea 
                    placeholder="Any special requirements or requests..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                  ></textarea>
                </div>
              </div>
              
              <div className="booking-summary">
                <h3>Booking Summary</h3>
                <div className="summary-content">
                  {selectedGuide && (
                    <div className="summary-item">
                      <div className="item-label">Guide</div>
                      <div className="item-value">{selectedGuide.name}</div>
                    </div>
                  )}
                  
                  {selectedDestination && (
                    <div className="summary-item">
                      <div className="item-label">Destination</div>
                      <div className="item-value">{selectedDestination.name}</div>
                    </div>
                  )}
                  
                  <div className="summary-item">
                    <div className="item-label">Rate</div>
                    <div className="item-value">
                      {selectedGuide ? `$${selectedGuide.hourlyRate}/hour` : 'Varies by guide'}
                    </div>
                  </div>
                  
                  <div className="summary-item">
                    <div className="item-label">Booking cost</div>
                    <div className="item-value total-price">
                      <p>$5</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="step-actions">
                <button className="btn outline" onClick={() => setStep(1)}>
                  Back
                </button>
                <button 
                  className="btn primary" 
                  onClick={() => setStep(3)}
                  disabled={!bookingDate}
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        )}
        
        {step === 3 && (
          <div className="step-content">
            <h2>Confirm Booking</h2>
            <p>Review your booking details</p>
            
            <div className="booking-confirmation">
              <div className="confirmation-details">
                <div className="detail-section">
                  <h3>Tour Details</h3>
                  <div className="detail-item">
                    <span>Guide:</span>
                    <strong>{selectedGuide?.name || 'To be assigned'}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Destination:</span>
                    <strong>{selectedDestination?.name || 'Multiple locations'}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Date:</span>
                    <strong>{bookingDate || 'Not selected'}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Duration:</span>
                    <strong>{duration} hours</strong>
                  </div>
                  <div className="detail-item">
                    <span>Group Size:</span>
                    <strong>{groupSize} {groupSize === 1 ? 'person' : 'people'}</strong>
                  </div>
                </div>
                
                <div className="detail-section">
                  <h3>Price Breakdown</h3>
                  
                  <div className="detail-item">
                    <span>Service Fee:</span>
                    <strong>$5</strong>
                  </div>
                  
                </div>
                
                <div className="detail-section">
                  <h3>Special Requests</h3>
                  <p>{specialRequests || 'None'}</p>
                </div>
              </div>
              
              <div className="payment-section">
                <h3>Payment Method</h3>
                
                <div className="payment-options">
                  <div className="payment-method active">
                    <i className="fab fa-cc-visa"></i>
                    <span>Credit/Debit Card</span>
                  </div>
                  <div className="payment-method">
                    <i className="fab fa-paypal"></i>
                    <span>PayPal</span>
                  </div>
                </div>
                
                <form className="payment-form">
                  <div className="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" />
                    </div>
                    
                    <div className="form-group">
                      <label>CVV</label>
                      <input type="text" placeholder="123" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  
                  <div className="terms">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                      I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Cancellation Policy</a>
                    </label>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="step-actions">
              <button className="btn outline" onClick={() => setStep(2)}>
                Back
              </button>
              <button className="btn primary" onClick={handleSubmitBooking}>
                Confirm & Pay Now
              </button>
            </div>
          </div>
        )}
        
        {step === 4 && (
          <div className="step-content success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Booking Confirmed!</h2>
            <p>Your tour with {selectedGuide?.name || 'our guide'} has been successfully booked</p>
            
            <div className="booking-details">
              <div className="detail-item">
                <span>Booking Reference:</span>
                <strong>SLT-{Math.floor(Math.random() * 10000)}</strong>
              </div>
              <div className="detail-item">
                <span>Date:</span>
                <strong>{bookingDate}</strong>
              </div>
              <div className="detail-item">
                <span>Duration:</span>
                <strong>{duration} hours</strong>
              </div>
              <div className="detail-item">
                <span>Total Paid:</span>
                <strong>${calculateTotal()}</strong>
              </div>
            </div>
            
            <div className="confirmation-actions">
              <Link to="/" className="btn primary">
                <i className="fas fa-home"></i> Back to Home
              </Link>
              <Link to="/destinations" className="btn outline">
                <i className="fas fa-map-marked-alt"></i> Explore More Destinations
              </Link>
              <button className="btn outline">
                <i className="fas fa-download"></i> Download Itinerary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;