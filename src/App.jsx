
import './App.css'
import React, { useState } from 'react';
import LandingPage from './Views/LandingPage/LandingPage.jsx';
import Home from './Views/Home/Home.jsx';
import { AuthProvider } from './Authcontext.jsx';


const App = () => {
  return (
    <AuthProvider>
      <AppContent />
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
        <Home onLogoutClick={handleLogoutClick} />  // Pasa la función de logout como prop
      ) : (
        <LandingPage onLoginClick={handleLoginClick} />
      )}
    </div>
  );
};

export default App;
