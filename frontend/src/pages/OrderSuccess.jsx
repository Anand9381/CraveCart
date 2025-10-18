import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId, message } = location.state || {};

  return (
    <div className="order-success">
      <div className="success-container">
        <div className="success-icon">✅</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your order. Your food is being prepared.</p>
        
        {orderId && (
          <div className="order-details">
            <p><strong>Order ID:</strong> {orderId}</p>
          </div>
        )}
        
        <div className="success-buttons">
          <button 
            className="btn-primary" 
            onClick={() => navigate('/myorders')}
          >
            View My Orders
          </button>
          <button 
            className="btn-secondary" 
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;