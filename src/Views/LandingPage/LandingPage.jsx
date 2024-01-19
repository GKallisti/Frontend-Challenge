import React from 'react';

const LandingPage = ({ onLoginClick }) => {
  return (
    <div className="landing-page">
      <h1>Bienvenido a la Gestión de Proyectos del Challenge Frontend.</h1>
      <p>Una aplicación simple para gestionar tus proyectos.</p>
      <button onClick={onLoginClick}>Iniciar sesión</button>
    </div>
  );
};

export default LandingPage;