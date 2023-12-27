import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';
import { DashboardContext } from '../../context/DashboardContext';

const EditTrainer = () => {
  const { trainers, updateTrainer } = useContext(DashboardContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    trainerName: '',
    expertise: '',
    image: '',
  });

  useEffect(() => {
    // Fetch trainer details based on id
    const selectedTrainer = trainers.find((trainer) => trainer.id === id);

    if (selectedTrainer) {
      setFormData({
        id: id,
        trainerName: selectedTrainer.trainerName,
        expertise: selectedTrainer.expertise,
        image: selectedTrainer.image,
      });
    }
  }, [id, trainers]);

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
    const { name, value, type, files } = event.target;

    // If the input is a file input, handle the file differently
    const newValue = type === 'file' ? files[0] : value;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
  };

  const handleEditTrainer = async (e) => {
    e.preventDefault();

    const { trainerName, expertise, image } = formData;

    // Check if any field is empty
    if (!trainerName || !expertise) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all required fields.',
      });
      return;
    }

    // Update trainer details
    updateTrainer(id, formData);

    // Redirect to the trainers list or trainer details page
    navigate('/dashboard/trainers');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevForm) => ({
        ...prevForm,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  return (
    <div style={containerStyle}>
      <h2 className="mb-5">Edit Trainer</h2>
      <form onSubmit={handleEditTrainer}>
        <div style={formGroupStyle}>
          <label htmlFor="trainerName">Trainer Name :</label>
          <input
            type="text"
            className="form-control"
            id="trainerName"
            name="trainerName"
            value={formData.trainerName}
            onChange={handleFormChange}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="expertise">Expertise :</label>
          <input
            type="text"
            className="form-control"
            id="expertise"
            name="expertise"
            value={formData.expertise}
            onChange={handleFormChange}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="image">Image :</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        {formData.image && (
          <img
            className='my-2'
            src={formData.image}
            alt="Trainer"
            width="200"
          />
        )}
        <div style={btnGroupStyle}>
          <button type="submit" className="btn btn-primary me-2">
            Update Trainer
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/dashboard/trainers')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTrainer;
