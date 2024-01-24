import React, { useState, useEffect } from 'react';
import { projects } from '../../Data/Data';
import { BsThreeDotsVertical, BsFillTrash3Fill, BsClipboard } from "react-icons/bs";

const ProjectsList = ({ handleBackClick, handleClick }) => {
  const [allProjects, setAllProjects] = useState([...projects])
  const projectsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [showMenu, setShowMenu] = useState(false)
  const [menuLocation, setMenuLocation] = useState({ x: 0, y: 0 })
  const [selectedProject, setSelectedProject] = useState(null)

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  let currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleActionClick = (e) => {
    setShowMenu(true)
    setMenuLocation({ x: e.screenX, y: e.screenY - 80 })
    setSelectedProject(e.target.id)
  }

  const deleteProject = () => {
    setAllProjects(allProjects.filter(p => p.name !== selectedProject))
  }

  const handleDeleteClick = () => {
    setShowMenu(false)
    deleteProject()
    // alert(`${selectedProject} eliminado`)
  }

  useEffect(() => {
    currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);
  }, [allProjects])

  return (
    <div className="projectList">
      {showMenu
        ?
        <div className='actionMenu' style={{ top: menuLocation.y, left: menuLocation.x }}>
          <BsClipboard id="projectEdit" onClick={handleClick} className='icon' />
          <BsFillTrash3Fill id="delete" onClick={handleDeleteClick} className='icon' />
        </div>
        :
        <></>}
      <div className='topBox'>
        <button className='backButton' onClick={handleBackClick}>{"← Atrás"}</button>
        <span className='title'>Mis Proyectos</span>
        <button id="projectCreate" className='button' onClick={handleClick}>+ Crear Proyecto</button>
      </div>
      <div className='topRow'>
        <div className='info'><b>Información del Proyecto</b></div>
        <div className='manager'><b>Project Manager</b></div>
        <div className='assignedTo'><b>Asignado a</b></div>
        <div className='status'><b>Estado</b></div>
        <div className='action'><b>Acción</b></div>
      </div>
      {
        currentProjects.map((p) => (
          <div key={p.name} className='projectsRow'>
            <div className='info'>
              <div>{p.name}</div>
              <div className='projectDescription'>{p.description}</div>
            </div>
            <div className='manager'>{p.manager}</div>
            <div className='assignedTo'>{p.assignedTo}</div>
            <div className='status'>{p.status}</div>
            <div className='action' id={p.name} onClick={handleActionClick}>
              <BsThreeDotsVertical id={p.name} />
            </div>
          </div>
        ))
      }
      <div className='pagination'>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>{`Página ${currentPage} de ${totalPages}`}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div >
  );
};

export default ProjectsList;