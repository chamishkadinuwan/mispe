// src/App.js
import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate 
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetail from './pages/DestinationDetail';
import GuidesPage from './pages/GuidesPage';
import GuideProfile from './pages/GuideProfile';
import BookingPage from './pages/BookingPage';
import BookingSuccessPage from './pages/BookingSuccessPage';
import Signin from './pages/Signin';
import './App.css';
import Login from './pages/Loginpage';
import Mispcalc from './pages/Mispcalc'; // Import MISP Calculator page



function App() {


  
const [isLoggedIn, setIsLoggedIn] = useState(() => {
  // More robust check for localStorage
  const storedAuth = localStorage.getItem('isLoggedIn');
  return storedAuth ? JSON.parse(storedAuth) : false;
});

useEffect(() => {
  localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
}, [isLoggedIn]);
  

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Protected Routes */}
            <Route 
              path="/destinations" 
              element={isLoggedIn ? <DestinationsPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/destination/:id" 
              element={isLoggedIn ? <DestinationDetail /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/guides" 
              element={isLoggedIn ? <GuidesPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/guide/:id" 
              element={isLoggedIn ? <GuideProfile /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/booking" 
              element={isLoggedIn ? <BookingPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/booking-success" 
              element={isLoggedIn ? <BookingSuccessPage /> : <Navigate to="/login" />} 
            />
            
            {/* Auth Routes - Redirect if already logged in */}
            <Route 
               path="/signin" 
               element={!isLoggedIn ? <Signin setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/login" 
              element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} 
            />

            <Route path="/mispcalc" element={<Mispcalc />} />



            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;