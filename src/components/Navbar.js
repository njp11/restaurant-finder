import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-navbar">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Restaurant Finder',
  icon: 'fas fa-utensils',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
