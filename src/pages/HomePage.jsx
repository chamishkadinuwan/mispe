// src/pages/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeaturedDestination from '../components/FeaturedDestination';
import GuideCard from '../components/GuideCard';
import { destinations, guides } from '../data/mockData';
import './HomePage.css';
import heroimmange from '../assets/pexels-tomas-malik-793526-1998438.jpg';
import hero from '../assets/pexels-srkportraits-10850852.jpg';

const HomePage = () => {
  const [showFullText, setShowFullText] = useState(false);
  const [showFullText1, setShowFullText1] = useState(false);
  const [showFullText2, setShowFullText2] = useState(false);
  const [showFullText3, setShowFullText3] = useState(false);

  const featuredDestinations = destinations.slice(0, 3);
  const featuredGuides = guides.slice(0, 4);

  const shortText = "Sri Lanka now faces new problems like the 2022 economic collapse, floods, droughts, and leftover issues from past conflicts.";
  const fullText = " The updated MISP helps by focusing on things like broken supply chains and mental health, making sure people still get important sexual and reproductive health (SRH) services.";

  const shortText1 = "The revised MISP uses WHO’s latest guidelines and global emergency lessons to help Sri Lanka improve care after rape, prevent HIV,";
  const fullText1 = "give access to emergency contraception, support GBV survivors, and ensure services meet global standards during crises.";

  const shortText2 = "During the 2022 crisis, weak coordination delayed SRH aid, but the updated MISP now clarifies roles, unifies supply chains,"
  const fullText2 = " and avoids effort duplication—saving time when systems break down."

  const shortText3 = "During the 2022 crisis, weak coordination delayed SRH aid, but the updated MISP now clarifies roles, unifies supply chains,"
  const fullText3 = " and avoids effort duplication—saving time when systems break down."


  
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-content">
          <h1>Discover the Magic of Sri Lanka</h1>
          <p style={{ color: 'white', fontWeight: 'bold' }}>
            Explore pristine beaches, ancient cities, and lush landscapes with experienced local guides
          </p>
          <div className="hero-buttons">
            <Link to="/mispcalc" className="btn primary">Try MISP CALC</Link>
            <Link to="/guides" className="btn secondary">Future Prediction</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <p style={{
            textAlign: 'center',
            fontSize: '40px',
            fontWeight: 'bold',
            paddingBottom: '20px',
            fontFamily: 'fantasy',
            letterSpacing: '10px'
          }}>Why Need MISP E+</p>

          <div className="benefits-grid">

            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3 className="benefit-title">Evolving Crisis Landscape</h3>
              <p className="benefit-description">
                {shortText}
                {showFullText && fullText}
              </p>
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="btn read-more-btn"
                style={{ marginTop: '10px' }}
              >
                {showFullText ? 'Read Less' : 'Read More'}
              </button>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">⚕️</div>
              <h3 className="benefit-title">Alignment with Global Standards</h3>
              <p className="benefit-description">
                {shortText1}
                {showFullText1 && fullText1}
              </p>
              <button
                onClick={() => setShowFullText1(!showFullText1)}
                className="btn read-more-btn"
                style={{ marginTop: '10px' }}
              >
                {showFullText1 ? 'Read Less' : 'Read More'}
              </button>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3 className="benefit-title">Coordination Gaps in Emergencies</h3>
              <p className="benefit-description">
                {shortText2}
                {showFullText2 && fullText2}
              </p>
              <button
                onClick={() => setShowFullText2(!showFullText2)}
                className="btn read-more-btn"
                style={{ marginTop: '10px' }}
              >
                {showFullText2 ? 'Read Less' : 'Read More'}
              </button>
              
              </div>

            <div className="benefit-card">
              <div className="benefit-icon">👩‍👧‍👦</div>
              <h3 className="benefit-title">Protecting Vulnerable Populations</h3>
              <p className="benefit-description">
                {shortText3}
                {showFullText3 && fullText3}
              </p>
              <button
                onClick={() => setShowFullText3(!showFullText3)}
                className="btn read-more-btn"
                style={{ marginTop: '10px' }}
              >
                {showFullText3 ? 'Read Less' : 'Read More'}
              </button>
              </div>
          </div>
        </div>
      </section>

        {/* Featured Destinations */}
        {/* <section className="featured-destinations" style={{ padding: 'inherit', paddingLeft: '20px' }}>
          <div className="container">
            <div className="section-header">
              <h2>Popular Destinations</h2>
              <Link to="/destinations" className="view-all">View All <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="destinations-grid">
              {featuredDestinations.map(destination => (
                <FeaturedDestination key={destination.id} destination={destination} />
              ))}
            </div>
          </div>
        </section> */}

      {/* How It Works */}
      {/* <section className="how-it-works">
        <div className="container" style={{ backgroundColor: 'green' }}>
          <h2>How to Book a Guide</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Explore Destinations</h3>
              <p>Find places you want to visit</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Choose a Guide</h3>
              <p>Browse profiles and reviews</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Book Online</h3>
              <p>Secure your guide in minutes</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Enjoy Your Trip</h3>
              <p>Experience Sri Lanka like a local</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Guides */}
      {/* <section className="featured-guides">
        <div className="container">
          <div className="section-header">
            <h2>Top Rated Guides</h2>
            <Link to="/guides" className="view-all">View All <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="guides-grid">
            {featuredGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="testimonials">
        <div className="container">
          <h2>What Travelers Say</h2>
          <div className='para' style={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: '4px' }}>
            <p>Hear from visitors who experienced Sri Lanka with our guides</p>
          </div>
          <div className="testimonial-cards">
            <div className="testimonial-card" style={{ "--order": 1 }}>
              <div className="rating">★★★★★</div>
              <p>Our guide Nimal was fantastic! He showed us hidden gems we never would have found on our own.</p>
              <div className="author">Sarah, Australia</div>
            </div>
            <div className="testimonial-card" style={{ "--order": 2 }}>
              <div className="rating">★★★★★</div>
              <p>"The booking process was smooth and our guide was extremely knowledgeable about Sri Lankan history."</p>
              <div className="author">- Thomas, Germany</div>
            </div>
            <div className="testimonial-card" style={{ "--order": 3 }}>
              <div className="rating">★★★★☆</div>
              <p>"Amazing experience with a local family thanks to our guide. Authentic Sri Lankan hospitality!"</p>
              <div className="author">- Marie, France</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="cta-section" style={{ backgroundImage: `url(${heroimmange})` }}>
        <div className="container">
          <div className="callpop">
            <h2>Know Your Numbers, Plan Your Future</h2>
            <p>Plan Your Perfect Contribution Today — Secure a Worry-Free Tomorrow</p>
            <Link to="/booking" className="btn primary">Sign In</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
