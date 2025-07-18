import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">🇱🇰</div>
            <h1>MISP E+</h1>
          </Link>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
              <li><NavLink to="/destinations" className={({ isActive }) => isActive ? 'active' : ''}>Centers</NavLink></li>
              <li><NavLink to="/guides" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
             
              
              {isLoggedIn ? (
                <li>
                  <button 
                    onClick={handleLogout} 
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'inherit',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      padding: '0'
                    }}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink></li>
              )}

              <li>
                <div className="auth-buttons" style={{paddingLeft:'100px', paddingBottom:'20px',paddingRight:'20px'}}>
                  <Link to="/booking" className="btn primary">Sign In</Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;