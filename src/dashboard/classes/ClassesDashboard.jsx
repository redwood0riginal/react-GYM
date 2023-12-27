import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DashboardContext } from '../../context/DashboardContext';

const StyledClasses = {
  margin: '20px',
  marginLeft: '250px',
  marginRight: 'auto',
};

const StyledTh = {
  padding: '10px 25px!important',
};

const StyledTd = {
  padding: '10px 25px!important',
  fontWeight: '400',
};

const ClassDashboard = () => {
  const { classes, deleteClass, fetchData } = useContext(DashboardContext);

  return (
    <div style={StyledClasses}>
      <h2 className="mb-4 ">All Classes</h2>
      <Link className='text-reset text-decoration-none' to={'/dashboard/classes/add'}>
        <button className='my-4 btn btn-success'>Add Classes</button>
      </Link>
      <button onClick={() => fetchData()} className='ms-2 my-4 btn btn-primary'>Refresh Data</button>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={StyledTh}>ID</th>
              <th style={StyledTh}>Image</th>
              <th style={StyledTh}>Class Name</th>
              <th style={StyledTh}>Schedule</th>
              <th style={StyledTh}>Capacity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem.id}>
                <td style={StyledTd}>{classItem.id}</td>
                <td style={StyledTd}><img width={'120px'} src={classItem.classImage} alt={classItem.className} /></td>
                <td style={StyledTd}>{classItem.className}</td>
                <td style={StyledTd}>{classItem.schedule}</td>
                <td style={StyledTd}>{classItem.capacity}</td>
                <td>
                  <Link to={`/dashboard/classes/edit/${classItem.id}`} className="me-2">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                  <span
                    className='ms-3'
                    style={{ cursor: 'pointer' }}
                    onClick={() => deleteClass(classItem.id)}
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

export default ClassDashboard;
