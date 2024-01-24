import React, { useEffect, useState } from 'react';
import ProjectsList from '../../Components/ProjectList/ProjectList.jsx';
import ProjectCreator from '../../Components/ProjectCreator/ProjectCreator.jsx';
import ProjectEditor from '../../Components/ProjectEditor/ProjectEditor.jsx';
import './Home.css';
import { useAuth } from '../../Authcontext.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import { useLocation, useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {
  const { logout } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    return () => {
    };
  }, []);

  const handleLogoutClick = () => {
    logout();
    window.location.href = '/';
  };

  const handleClick = (e) => {
    navigate(`/${e.target.id}`)
  }

  const handleBackClick = () => {
    navigate("/")
  }

  return (
    <div className='home'>
      <Navbar />
      <div className="homecontainer">
        {
          location.pathname === "/projectList"
            ?
            <ProjectsList
              handleBackClick={handleBackClick}
              handleClick={handleClick}>
            </ProjectsList>
            :
            location.pathname === "/projectCreate" ? <ProjectCreator handleBackClick={handleBackClick}></ProjectCreator>
              :
              location.pathname === "/projectEdit" ? <ProjectEditor handleBackClick={handleBackClick}></ProjectEditor>
                :
                <>
                  <h2 id="projectList" className="column" onClick={handleClick}>Lista de Proyectos</h2>
                  <h2 id="projectCreate" className="column" onClick={handleClick}>Crear Proyecto</h2>
                  <h2 id="projectEdit" className="column" onClick={handleClick}>Editar Proyecto</h2>
                </>
        }
        {/* <div className="homecontent">
        </div> */}
      </div>
    </div>
  );
};

export default Home;