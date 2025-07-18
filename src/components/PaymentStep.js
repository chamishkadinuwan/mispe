// src/components/PaymentStep.js
import React, { useState } from 'react';
import GooglePayButton from './GooglePayButton';

const PaymentStep = ({ amount, currency, onPaymentSuccess, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('googlepay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);
  
  const handleGooglePaySuccess = (paymentData) => {
    setIsProcessing(false);
    setPaymentResult({
      success: true,
      message: "Payment successful!",
      data: paymentData
    });
    
    // Notify parent component after a delay
    setTimeout(() => {
      if (onPaymentSuccess) onPaymentSuccess(paymentData);
    }, 1500);
  };
  
  const handleGooglePayError = (error) => {
    setIsProcessing(false);
    setPaymentResult({
      success: false,
      message: error
    });
  };
  
  const handlePaymentProcessing = () => {
    setIsProcessing(true);
    setPaymentResult(null);
  };

  return (
    <div className="payment-step">
      <h2>Complete Payment</h2>
      <p className="subtitle">Total Amount: {amount} {currency}</p>
      
      <div className="payment-methods">
        <div 
          className={`method-card ${paymentMethod === 'googlepay' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('googlepay')}
        >
          <div className="method-icon">
            <div className="google-pay-logo">
              <span className="g">G</span>
              <span className="pay">Pay</span>
            </div>
          </div>
          <div className="method-info">
            <h3>Google Pay</h3>
            <p>Fast and secure payment with Google</p>
          </div>
          <div className="method-selector">
            <div className={`radio ${paymentMethod === 'googlepay' ? 'checked' : ''}`}>
              {paymentMethod === 'googlepay' && <div className="radio-dot"></div>}
            </div>
          </div>
        </div>
        
        <div 
          className={`method-card ${paymentMethod === 'card' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('card')}
        >
          <div className="method-icon">
            <i className="fas fa-credit-card"></i>
          </div>
          <div className="method-info">
            <h3>Credit/Debit Card</h3>
            <p>Pay with Visa, Mastercard, or other cards</p>
          </div>
          <div className="method-selector">
            <div className={`radio ${paymentMethod === 'card' ? 'checked' : ''}`}>
              {paymentMethod === 'card' && <div className="radio-dot"></div>}
            </div>
          </div>
        </div>
      </div>
      
      {paymentMethod === 'googlepay' && (
        <div className="google-pay-section">
          <h3>Google Pay</h3>
          <p>Securely pay with your Google account</p>
          
          <div className="google-pay-demo">
            {isProcessing ? (
              <div className="payment-processing">
                <div className="spinner"></div>
                <p>Processing payment with Google Pay...</p>
              </div>
            ) : paymentResult ? (
              <div className={`payment-result ${paymentResult.success ? 'success' : 'error'}`}>
                <div className="result-icon">
                  {paymentResult.success ? (
                    <i className="fas fa-check-circle"></i>
                  ) : (
                    <i className="fas fa-times-circle"></i>
                  )}
                </div>
                <p>{paymentResult.message}</p>
                {paymentResult.success && (
                  <div className="transaction-details">
                    <p>Transaction ID: {paymentResult.data.transactionId}</p>
                    <p>Amount: {paymentResult.data.amount} {paymentResult.data.currency}</p>
                  </div>
                )}
              </div>
            ) : (
              <GooglePayButton 
                amount={amount}
                currency={currency}
                onPaymentSuccess={handleGooglePaySuccess}
                onPaymentError={handleGooglePayError}
                onPaymentInitiated={handlePaymentProcessing}
              />
            )}
          </div>
        </div>
      )}
      
      {paymentMethod === 'card' && (
        <div className="card-payment-section">
          <h3>Enter Card Details</h3>
          
          <div className="card-form">
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
            
            <button className="btn primary full-width">
              Pay {amount} {currency}
            </button>
          </div>
        </div>
      )}
      
      <div className="payment-footer">
        <button className="btn outline" onClick={onBack}>
          <i className="fas fa-arrow-left"></i> Back to Booking
        </button>
        
        <div className="security-info">
          <i className="fas fa-lock"></i>
          <span>Secure Payment • Encrypted Connection</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;