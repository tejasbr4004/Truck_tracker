import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const location = useLocation();
  const ph = location.state?.ph || "";
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          {/* <Link to="/" className="navbar-link">Home</Link> */}
        </li>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Phone Number: +{ph}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
