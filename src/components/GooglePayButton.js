// src/components/GooglePayButton.js
import React, { useState, useEffect } from 'react';

const GooglePayButton = ({ amount, currency, onPaymentSuccess, onPaymentError }) => {
  const [isGooglePayLoaded, setIsGooglePayLoaded] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  
  useEffect(() => {
    // Simulate loading Google Pay API
    const timer = setTimeout(() => {
      setIsGooglePayLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleGooglePayClick = () => {
    // Reset any previous errors
    setPaymentError(null);
    
    // Simulate payment processing
    const paymentProcessing = setTimeout(() => {
      // Simulate a 20% chance of payment failure
      if (Math.random() < 0.2) {
        const errorMsg = "Payment failed. Insufficient funds or card declined.";
        setPaymentError(errorMsg);
        if (onPaymentError) onPaymentError(errorMsg);
      } else {
        if (onPaymentSuccess) onPaymentSuccess({
          transactionId: `GPAY-${Date.now()}`,
          amount: amount,
          currency: currency,
          timestamp: new Date().toISOString()
        });
      }
    }, 2000);
    
    return () => clearTimeout(paymentProcessing);
  };

  return (
    <div className="google-pay-container">
      {!isGooglePayLoaded ? (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>Loading Google Pay...</p>
        </div>
      ) : (
        <>
          <button 
            className="google-pay-button"
            onClick={handleGooglePayClick}
          >
            <div className="google-pay-logo">
              <span className="g">G</span>
              <span className="pay">Pay</span>
            </div>
            <span className="pay-text">Pay with Google Pay</span>
          </button>
          
          {paymentError && (
            <div className="payment-error">
              <i className="fas fa-exclamation-circle"></i> {paymentError}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GooglePayButton;