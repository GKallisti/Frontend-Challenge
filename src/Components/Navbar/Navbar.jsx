import React from 'react';
import { useAuth } from '../../Authcontext';
import './Navbar.css';  // Asegúrate de ajustar la ruta según tu estructura de archivos

const Navbar = () => {
  const { logout } = useAuth();

  const handleLogoutClick = () => {
    logout();
    // Redirige a la landing page después de hacer logout
    window.location.href = '/'; // Ajusta la ruta según tu configuración
  };

  return (
    <div className="navbar">
      <button onClick={handleLogoutClick} className="logout-button">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Navbar;