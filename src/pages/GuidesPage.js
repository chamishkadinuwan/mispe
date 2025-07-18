import React, { useState, useEffect } from 'react';

const FuturePredictionsPage = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/resource-needs-monthly')
      .then(res => res.json())
      .then(data => setMonthlyData(data))
      .catch(err => console.error('Failed to fetch monthly resource data:', err));
  }, []);

  const filteredData = monthlyData.filter(entry =>
    entry.City.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="predictions-page">
      <style>{`
        .predictions-page {
          background-color: #f4f6f9;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .page-header {
          background: linear-gradient(to right, #005c97, #363795);
          color: white;
          padding: 50px 0;
          text-align: center;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 30px 20px;
        }

        .search-bar input {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border-radius: 6px;
          border: 1px solid #ccc;
          margin-bottom: 20px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .card {
          background-color: white;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
          transition: box-shadow 0.3s ease;
        }

        .card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card h3 {
          margin-bottom: 10px;
          font-size: 1.3rem;
          color: #003366;
        }

        .card .meta p {
          margin: 5px 0;
          font-size: 0.95rem;
          color: #444;
        }
      `}</style>

      <div className="page-header">
        <h1>Monthly Resource Needs Forecast</h1>
        <p>Based on 2026 flood prediction data</p>
      </div>

      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid">
          {filteredData.length > 0 ? (
            filteredData.map((item, idx) => (
              <div className="card" key={idx}>
                <h3>{item.City} - {item.Month}</h3>
                <div className="meta">
                  <p><strong>Predicted Affected People:</strong> {item['Predicted Affected People']}</p>
                  <p><strong>Water (Liters):</strong> {item['Water Liters']}</p>
                  <p><strong>Food Packs:</strong> {item['Food Packs']}</p>
                  <p><strong>Medical Kits:</strong> {item['Medical Kits']}</p>
                  <p><strong>Blankets:</strong> {item['Blankets']}</p>
                  <p><strong>Sanitation Kits:</strong> {item['Sanitation Kits']}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="card">
              <h3>No results</h3>
              <p>Try a different city name.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FuturePredictionsPage;
