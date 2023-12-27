import { useState, useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import { generateUUID } from '../../utils/helpers';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddClasses = () => {
  const { addClass, trainers } = useContext(DashboardContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: generateUUID(),
    className: '',
    schedule: '',
    capacity: '',
    classImage: '',
    trainer: '',
  });

  const containerStyle = {
    width: '450px',
    margin: '10px 270px',
  };

  const formGroupStyle = {
    fontWeight: 'bold',
    marginTop: '2rem',
  };

  const btnGroupStyle = {
    marginTop: '4rem',
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevForm) => ({
        ...prevForm,
        classImage: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleAddClass = async (e) => {
    e.preventDefault();

    const { className, schedule, capacity, trainer } = formData;

    // Check if any field is empty
    if (!className || !schedule || !capacity || !trainer) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all required fields.',
      });
      return;
    }

    addClass(formData);
    navigate('/dashboard/classes');

    setFormData({
      id: '',
      className: '',
      schedule: '',
      capacity: '',
      classImage: '',
      trainer: '',
    });
  };

  return (
    <div style={containerStyle}>
      <h2 className='mb-5'>Add Class</h2>
      <form onSubmit={handleAddClass}>
        <div style={formGroupStyle}>
          <label htmlFor="className">Class Name :</label>
          <input
            type="text"
            className="form-control"
            id="className"
            name="className"
            value={formData.className}
            onChange={handleFormChange}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="schedule">Schedule :</label>
          <input
            type="text"
            className="form-control"
            id="schedule"
            name="schedule"
            value={formData.schedule}
            onChange={handleFormChange}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="capacity">Capacity :</label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleFormChange}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="trainer">Trainer :</label>
          <select
            className="form-control"
            id="trainer"
            name="trainer"
            value={formData.trainer}
            onChange={handleFormChange}
          >
            <option value="" disabled>Select a trainer</option>
            {trainers.map((trainer) => (
              <option key={trainer.id} value={trainer.id}>
                {trainer.trainerName}
              </option>
            ))}
          </select>
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="classImage">Class Image :</label>
          <input
            type="file"
            className="form-control-file"
            id="classImage"
            name="classImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {formData.classImage && (
          <img
            className='my-2'
            src={formData.classImage}
            alt="Class"
            width="200"
          />
        )}
        <div style={btnGroupStyle}>
          <button type="submit" className="btn btn-success me-2">
            Add Class
          </button>
          <button type="reset" className='btn btn-secondary'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddClasses;
