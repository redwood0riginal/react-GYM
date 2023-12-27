import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { DashboardContext } from '../../context/DashboardContext';

const StyledEditClasses = {
  width: '450px',
  margin: '10px 270px',
};

const EditClasses = () => {
  const { updateClass, trainers } = useContext(DashboardContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    className: '',
    schedule: '',
    capacity: '',
    classImage: '',
    trainer: '',
  });

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


  useEffect(() => {
    // Fetch class details by ID and set the form data
    const fetchClassDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/classes/${id}`);
        const classData = response.data;

        setFormData({
          id: classData.id,
          className: classData.className,
          schedule: classData.schedule,
          capacity: classData.capacity,
        });
      } catch (error) {
        console.error('Error fetching class details:', error);
      }
    };

    fetchClassDetails();
  }, [id]);

  const handleFormChange = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === 'number' ? Number(value) : value;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
  };

  const handleUpdateClass = async (e) => {
    e.preventDefault();

    const { className, schedule, capacity } = formData;

    // Check if any field is empty
    if (!className || !schedule || !capacity) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all required fields.',
      });
      return;
    }

    // Call the updateClass function from DashboardContext
    await updateClass(formData.id, formData);
    navigate('/dashboard/classes');
  };

  return (
    <div style={StyledEditClasses}>
      <h2>Edit Class</h2>
      <form onSubmit={handleUpdateClass}>
        <div className="form-group fw-bold my-2">
          <label htmlFor="className">Class Name:</label>
          <input
            type="text"
            className="form-control"
            id="className"
            name="className"
            value={formData.className}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-group fw-bold my-2">
          <label htmlFor="schedule">Schedule:</label>
          <input
            type="text"
            className="form-control"
            id="schedule"
            name="schedule"
            value={formData.schedule}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-group fw-bold my-2">
          <label htmlFor="capacity">Capacity:</label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            name="capacity"
            value={formData.capacity}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-group fw-bold my-2">
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
        <div className="form-group fw-bold my-2">
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
        <div className="form-group mt-4">
          <button type="submit" className="btn btn-primary me-2">
            Update Class
          </button>
          <button type="reset" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditClasses;
