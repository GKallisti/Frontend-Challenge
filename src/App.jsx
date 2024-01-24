
import './App.css'
import React, { useState } from 'react';
import LandingPage from './Views/LandingPage/LandingPage.jsx';
import Home from './Views/Home/Home.jsx';
import { AuthProvider } from './Authcontext.jsx';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
};


const AppContent = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogoutClick={handleLogoutClick} />
      ) : (
        <LandingPage onLoginClick={handleLoginClick} />
      )}
    </div>
  );
};

export default App;
