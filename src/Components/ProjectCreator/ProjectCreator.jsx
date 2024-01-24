import React, { useState } from 'react';

const ProjectCreator = ({ handleBackClick }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [manager, setManager] = useState('');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState('Activo');
  const [nameError, setNameError] = useState('');
  const [disableCreate, setDisableCreate] = useState(false);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setProjectName(newName);

    if (newName.length < 3) {
      setNameError('Ingrese un nombre de proyecto válido (mínimo 3 letras).');
      setDisableCreate(true);
    } else {
      setNameError('');
      setDisableCreate(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div className="projectCreator">
      <div className='topBox'>
        <button className='backButton' onClick={handleBackClick}>{"← Atrás"}</button>
        <span className='title'>Crear Proyecto</span>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label' htmlFor="projectName">
          Nombre del Proyecto
        </label>
        <input
          className="input"
          type="text"
          id="projectName"
          value={projectName}
          onChange={handleNameChange}
        />
        {nameError && <p className="error-message">{nameError}</p>}
        <label className='label' htmlFor="projectDescription">
          Descripción del Proyecto
        </label>
        <input
          className="input"
          type="text"
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <label className='label' htmlFor="manager">
          Project Manager
        </label>
        <select
          className="input"
          id="manager"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
        >
          <option disabled={true} value="">
            Selecciona una persona
          </option>
          <option value="1">Persona 1</option>
          <option value="2">Persona 2</option>
          <option value="3">Persona 3</option>
        </select>
        <label className='label' htmlFor="assignee">
          Asignado a
        </label>
        <select
          className="input"
          id="assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        >
          <option disabled={true} value="">
            Selecciona una persona
          </option>
          <option value="1">Persona 1</option>
          <option value="2">Persona 2</option>
          <option value="3">Persona 3</option>
        </select>
        <label className='label' htmlFor="status">
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
        <input
          className='button'
          type="submit"
          value="Crear"
          disabled={disableCreate}
        />
      </form>
    </div>
  );
};

export default ProjectCreator;
