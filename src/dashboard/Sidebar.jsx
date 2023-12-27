import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBox, faUsers, faRightFromBracket, faFootball } from '@fortawesome/free-solid-svg-icons';
// import Logo from '../assets/img/gallery/';
import { AuthContext } from '../context/AuthContext';

const sidebarContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '230px',
  width: '230px',
  minHeight: '100vh',
  height: '100%',
  backgroundColor: '#f8f9fa', // Set your desired color
  padding: '20px',
  marginRight: '20px',
  position: 'fixed',
  left: '0',
  top: '0',
  bottom: '0',
  overflowY: 'auto',
};

const sidebarLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '15px 0',
  color: '#495057',
  textDecoration: 'none',
};

const activeLinkStyle = {
  color: '#007bff',
  fontWeight: 'bold',
};

const iconStyle = {
  marginRight: '10px',
};

const footerStyle = {
  marginTop: 'auto',
};

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div style={sidebarContainerStyle}>
      <NavLink to="/dashboard" style={sidebarLinkStyle} exact activeStyle={activeLinkStyle}>
        <FontAwesomeIcon icon={faChartBar} style={iconStyle} />
        Dashboard
      </NavLink>
      <NavLink to="/dashboard/classes" style={sidebarLinkStyle} activeStyle={activeLinkStyle}>
        <FontAwesomeIcon icon={faBox} style={iconStyle} />
        Classes
      </NavLink>
      <NavLink to="/dashboard/users" style={sidebarLinkStyle} activeStyle={activeLinkStyle}>
        <FontAwesomeIcon icon={faUsers} style={iconStyle} />
        Users
      </NavLink>
      <NavLink to="/dashboard/trainers" style={sidebarLinkStyle} activeStyle={activeLinkStyle}>
        <FontAwesomeIcon icon={faFootball} style={iconStyle} />
        Trainers
      </NavLink>
      <div style={footerStyle}>
        <button className='btn btn-outline-danger me-2 my-3' onClick={logout} >
          Logout <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
