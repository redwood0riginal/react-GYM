import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DashboardContext } from '../../context/DashboardContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Trainers = () => {
  const { trainers, deleteTrainer } = useContext(DashboardContext);

  const containerStyle = {
    margin: '20px',
    marginLeft: '250px',
    marginRight: 'auto',
  };

  const tableStyle = {
    width: '100%',
  };

  const thStyle = {
    padding: '10px 25px!important',
  };

  const tdStyle = {
    padding: '10px 25px!important',
    fontWeight: 400,
  };

  return (
    <div style={containerStyle}>
      <h2 className="mb-4">All Trainers</h2>
      <Link to={'/dashboard/trainers/add'} className='btn btn-success'>Add Trainers</Link>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Image</th>
              <th style={thStyle}>Trainer Name</th>
              <th style={thStyle}>Expertise</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer.id}>
                <td style={tdStyle}>{trainer.id}</td>
                <td style={tdStyle}><img width="120" src={trainer.image} alt={trainer.trainerName} /></td>
                <td style={tdStyle}>{trainer.trainerName}</td>
                <td style={tdStyle}>{trainer.expertise}</td>
                <td>
                  <Link to={`/dashboard/trainers/edit/${trainer.id}`} className="me-2">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <span
                    className='ms-3'
                    style={{ cursor: 'pointer' }}
                    onClick={() => deleteTrainer(trainer.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className='text-danger' />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trainers;
