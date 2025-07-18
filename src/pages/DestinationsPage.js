// src/pages/DestinationsPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import { disasterCenters } from '../data/disasterData'; // renamed data import
import './DestinationsPage.css';

const DisasterCentersPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['all', 'flood', 'landslide', 'cyclone', 'tsunami', 'earthquake'];

  const filteredCenters = disasterCenters.filter(center => {
    const matchesCategory = filter === 'all' || center.disasterType.toLowerCase() === filter;
    const matchesSearch =
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (center.centerName && center.centerName.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="destinations-page">
      <div className="page-header">
        <div className="container">
          <div className="pop">
            <h1>Disaster Management Centers in Sri Lanka</h1>
            <p>Find emergency centers, contacts, and resources by region and disaster type</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="filters">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search centers or districts..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i className="fas fa-search"></i>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button 
                key={category}
                className={filter === category ? 'active' : ''}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="destinations-grid">
          {filteredCenters.length > 0 ? (
            filteredCenters.map(center => (
              <DestinationCard key={center.id} destination={center} />
            ))
          ) : (
            <div className="no-results">
              <i className="fas fa-exclamation-triangle"></i>
              <h3>No centers found</h3>
              <p>Try changing your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisasterCentersPage;
