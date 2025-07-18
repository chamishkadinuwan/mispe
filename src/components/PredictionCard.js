import React from 'react';

const PredictionCard = ({ prediction }) => {
  return (
    <div className="prediction-card">
      <style>{`
        .prediction-card {
          background-color: white;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
          transition: box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .prediction-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .prediction-card h3 {
          font-size: 1.3rem;
          color: #003366;
          margin-bottom: 10px;
        }

        .prediction-card p {
          font-size: 0.95rem;
          color: #444;
          margin-bottom: 15px;
        }

        .prediction-card .meta {
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 0.9rem;
          color: #666;
        }

        .prediction-card .meta span {
          line-height: 1.4;
        }
      `}</style>

      <h3>{prediction.title}</h3>
      <p>{prediction.description}</p>
      <div className="meta">
        <span><strong>Type:</strong> {prediction.type}</span>
        <span><strong>Region:</strong> {prediction.region}</span>
        <span><strong>Year:</strong> {prediction.year}</span>
      </div>
    </div>
  );
};

export default PredictionCard;
