import React, { useEffect } from 'react';
import ProjectsList from '../../Components/ProjectList/ProjectList.jsx';
import ProjectCreator from '../../Components/ProjectCreator/ProjectCreator.jsx';
import ProjectEditor from '../../Components/ProjectEditor/ProjectEditor.jsx';
import './Home.css';
import { useAuth } from '../../Authcontext.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';

const Home = () => {
  const { logout } = useAuth();

  useEffect(() => {
    return () => {
    };
  }, []);

  const handleLogoutClick = () => {
    logout();
    window.location.href = '/'; 
  };

  return (
<>
<Navbar/>
    <div className="homecontainer">
   
      <div className="homecontent">
        <ProjectsList />
        <ProjectCreator />
        <ProjectEditor />
      </div>
    </div>
    </>
  );
};

export default Home;