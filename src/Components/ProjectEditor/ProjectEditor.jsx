import React, { useState } from 'react';
import { projectManagers } from '../../Data/Data.js';

const ProjectEditor = ({ handleBackClick, isEditing }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectManager, setProjectManager] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('Activo');

  const currentProject = isEditing ? {} : {};

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="projectEditor">
      <div className="topBox">
        <button className="backButton" onClick={handleBackClick}>
          {"← Atrás"}
        </button>
        <span className="title">{isEditing ? 'Editar Proyecto' : 'Crear Proyecto'}</span>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="projectName">
          Nombre del Proyecto
        </label>
        <input
          className="input"
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label className="label" htmlFor="projectDescription">
          Descripción del Proyecto
        </label>
        <input
          className="input"
          type="text"
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <label className="label" htmlFor="projectManager">
          Project Manager
        </label>
        <select
          className="input"
          id="projectManager"
          value={projectManager}
          onChange={(e) => setProjectManager(e.target.value)}
        >
          <option disabled={true} value="" selected>
            Selecciona un Project Manager
          </option>
          {projectManagers.map((manager) => (
            <option key={manager.id} value={manager.id}>
              {manager.name}
            </option>
          ))}
        </select>
        <label className="label" htmlFor="assignedTo">
          Asignado a
        </label>
        <select
          className="input"
          id="assignedTo"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        >
          <option disabled={true} value="" selected>
            Selecciona una persona
          </option>
          {projectManagers.map((manager) => (
            <option key={manager.id} value={manager.id}>
              {manager.name}
            </option>
          ))}
        </select>
        <label className="label" htmlFor="status">
          Estado
        </label>
        <select
          className="input"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
        <input className="button" type="submit" value={isEditing ? 'Guardar Cambios' : 'Crear'} />
      </form>
    </div>
  );
};

export default ProjectEditor;