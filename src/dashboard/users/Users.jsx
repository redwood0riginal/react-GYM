import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { DashboardContext } from '../../context/DashboardContext';

const tableStyle = {
  marginTop: '20px',
};

const thStyle = {
  padding: '10px 25px!important',
};

const tdStyle = {
  padding: '10px 25px!important',
  fontWeight: 400,
};

const Users = () => {
  const { users, deleteUser, fetchData } = useContext(DashboardContext);

  console.log(users);

  const members = users.filter((user) => user.role === 'member');
  const admins = users.filter((user) => user.role === 'admin');

  return (
    <div style={{ margin: '20px', marginLeft: '250px', marginRight: 'auto' }}>
      <h2 className="mb-4">All Users</h2>
      <Link className='text-reset text-decoration-none' to={'/dashboard/users/add'}><button className='my-3 btn btn-success'>Add Users</button></Link>
      <button onClick={() => fetchData()} className='btn btn-primary ms-2 my-4'>Refresh Data</button>

      <h3 className="mb-3 mt-4">Members</h3>
      <div className="table-responsive" style={tableStyle}>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={thStyle}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {members.map((customer) => (
              <tr key={customer.id}>
                <td style={tdStyle}>{customer.id}</td>
                <td style={tdStyle}>{customer.name}</td>
                <td style={tdStyle}>{customer.email}</td>
                <td style={tdStyle}>{customer.phone}</td>
                <td style={{ ...tdStyle, textAlign: 'center' }} className='fs-5'>
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => deleteUser(customer.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className='text-danger' />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mb-3 mt-4">Admins</h3>
      <div className="table-responsive" style={tableStyle}>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Phone</th>
              <th style={{ width: '70px' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td style={tdStyle}>{admin.id}</td>
                <td style={tdStyle}>{admin.name}</td>
                <td style={tdStyle}>{admin.email}</td>
                <td style={tdStyle}>{admin.phone}</td>
                <td style={{ ...tdStyle}} className='fs-5 text-center'>
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => deleteUser(admin.id)}
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

export default Users;
