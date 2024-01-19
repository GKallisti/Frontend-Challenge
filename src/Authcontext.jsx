import React, { createContext, useContext, useState } from 'react';

const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <Authcontext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </Authcontext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(Authcontext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };