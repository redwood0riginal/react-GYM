import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersResponse = await axios.get('http://localhost:3000/users');
      setUsers(usersResponse.data);

      const classesResponse = await axios.get('http://localhost:3000/classes');
      setClasses(classesResponse.data);

      const trainersResponse = await axios.get('http://localhost:3000/trainers');
      setTrainers(trainersResponse.data);

    } catch (error) {
      showAlert('error', 'Error', 'Error while fetching data');
    }
  };

  console.log(users);
  console.log(classes);

  const showAlert = (icon, title, text) => {
    Swal.fire({
      icon,
      title,
      text,
    });
  };

  const handleOperationError = (dataType, operation) => {
    showAlert('error', 'Error', `An error occurred while ${operation} ${dataType}. Please try again.`);
  };

  // Users
  const addUser = async (newUser) => {
    try {
      const response = await axios.post('http://localhost:3000/users', newUser);
      setUsers([...users, response.data]);
      showAlert('success', 'User Added', 'User added successfully.');
    } catch (error) {
      handleOperationError('user', 'adding');
    }
  };

  const deleteUser = async (userId) => {
    try {
      const result = await Swal.fire({
        icon: 'question',
        title: 'Confirmation',
        text: 'Are you sure you want to delete this user?',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/users/${userId}`);
        setUsers(users.filter((user) => user.id !== userId));
        showAlert('success', 'User Deleted', 'User deleted successfully.');
      }
    } catch (error) {
      handleOperationError('user', 'deleting');
    }
  };

  // Classes
  const addClass = async (newClass) => {
    try {
      const response = await axios.post('http://localhost:3000/classes', newClass);
      setClasses([...classes, response.data]);
      showAlert('success', 'Class Added', 'Class added successfully.');
    } catch (error) {
      handleOperationError('class', 'adding');
    }
  };

  const deleteClass = async (classId) => {
    try {
      const result = await Swal.fire({
        icon: 'question',
        title: 'Confirmation',
        text: 'Are you sure you want to delete this class?',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/classes/${classId}`);
        setClasses(classes.filter((gymClass) => gymClass.id !== classId));
        showAlert('success', 'Class Deleted', 'Class deleted successfully.');
      }
    } catch (error) {
      handleOperationError('class', 'deleting');
    }
  };

  const updateClass = async (classId, updatedClass) => {
    try {
      await axios.put(`http://localhost:3000/classes/${classId}`, updatedClass);
      fetchData();
      showAlert('success', 'Class Updated', 'Class updated successfully.');
    } catch (error) {
      handleOperationError('class', 'updating');
    }
  };

  // Trainers
  const addTrainer = async (newTrainer) => {
    try {
      const response = await axios.post('http://localhost:3000/trainers', newTrainer);
      setTrainers([...trainers, response.data]);
      showAlert('success', 'Trainer Added', 'Trainer added successfully.');
    } catch (error) {
      handleOperationError('trainer', 'adding');
    }
  };

  const deleteTrainer = async (trainerId) => {
    try {
      const result = await Swal.fire({
        icon: 'question',
        title: 'Confirmation',
        text: 'Are you sure you want to delete this trainer?',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/trainers/${trainerId}`);
        setTrainers(trainers.filter((trainer) => trainer.id !== trainerId));
        showAlert('success', 'Trainer Deleted', 'Trainer deleted successfully.');
      }
    } catch (error) {
      handleOperationError('trainer', 'deleting');
    }
  };

  const updateTrainer = async (trainerId, updatedTrainer) => {
    try {
      await axios.put(`http://localhost:3000/trainers/${trainerId}`, updatedTrainer);
      fetchData();
      showAlert('success', 'Trainer Updated', 'Trainer updated successfully.');
    } catch (error) {
      handleOperationError('trainer', 'updating');
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        fetchData,
        users,
        addUser,
        deleteUser,
        classes,
        addClass,
        deleteClass,
        updateClass,
        trainers,
        addTrainer,
        deleteTrainer,
        updateTrainer,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
