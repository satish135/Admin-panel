// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserShield,
  faChalkboardTeacher,
  faUserGraduate,
  faUsers,
  faBus,
  faCalendarAlt,
  faMoneyBillAlt,
  faFileAlt,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul> 
        <li>
         <h3>Visinaries AI</h3> 
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faHome} /> 
            <h4>Dashboard</h4>
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <FontAwesomeIcon icon={faUserShield} />
             <h4>Admin</h4>
          </Link>
        </li>
        <li>
          <Link to="/teacher">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
             <h4> Teacher</h4>
          </Link>
        </li>
        <li>
          <Link to="/student">
            <FontAwesomeIcon icon={faUserGraduate} />
             <h4>Student</h4>
          </Link>
        </li>
        <li>
          <Link to="/parents">
            <FontAwesomeIcon icon={faUsers} /> 
            <h4>Parents</h4>
          </Link>
        </li>
        <li>
          <Link to="/driver">
            <FontAwesomeIcon icon={faBus} />
            <h4>Driver</h4> 
          </Link>
        </li>
        <li>
          <Link to="/event">
            <FontAwesomeIcon icon={faCalendarAlt} /> 
            
            <h4>Event</h4>
          </Link>
        </li>
        <li>
          <Link to="/finance">
            <FontAwesomeIcon icon={faMoneyBillAlt} />
            <h4>Finance</h4> 
          </Link>
        </li>
        <li>
          <Link to="/admission">
            <FontAwesomeIcon icon={faFileAlt} /> 
            <h4>Admission</h4>
          </Link>
        </li>
        <li>
          <Link to="/management">
            <FontAwesomeIcon icon={faTasks} />
             <h4>Management</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
