import { useState, useContext } from 'react';
import { DashboardContext } from '../../context/DashboardContext';
import Swal from 'sweetalert2';
import { generateUUID } from '../../utils/helpers';

const AddTrainers = () => {
  const { addTrainer } = useContext(DashboardContext);
  const [formData, setFormData] = useState({
    id: generateUUID(),
    trainerName: '',
    expertise: '',
    image: '',
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
    const { name, value, type, files } = event.target;

    // If the input is a file input, handle the file differently
    const newValue = type === 'file' ? files[0] : value;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
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

  const handleAddTrainer = async (e) => {
    e.preventDefault();

    const { trainerName, expertise, image } = formData;

    // Check if any field is empty
    if (!trainerName || !expertise || !image) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all required fields.',
      });
      return;
    }

    // Add trainer
    addTrainer({
      ...formData,
      id: generateUUID(8), // generate UUID for id
    });

    setFormData({
      trainerName: '',
      expertise: '',
      image: '',
    });
  };

  return (
    <div style={containerStyle}>
      <h2 className="mb-5">Add Trainer</h2>
      <form onSubmit={handleAddTrainer}>
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
            className="form-control"
            id="image"
            name="image"
            onChange={handleImageChange}
          />
        </div>
        <div style={btnGroupStyle}>
          <button type="submit" className="btn btn-success me-2">
            Add Trainer
          </button>
          <button type="reset" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTrainers;
