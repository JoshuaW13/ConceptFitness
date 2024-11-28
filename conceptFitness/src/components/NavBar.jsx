import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function NavBar({ FirstButton, SecondButton, OtherButtons }) {
  const otherButtonsArray = Array.isArray(OtherButtons) ? OtherButtons : [];

  return (
    <nav className="navbar">
      {FirstButton && <FirstButton />}
      {otherButtonsArray.map((Component, index) => (
        <Component key={index} />
      ))}
      {SecondButton && <SecondButton />}
    </nav>
  );
}

NavBar.propTypes = {
  FirstButton: PropTypes.func, 
  SecondButton: PropTypes.func,
  OtherButtons: PropTypes.oneOfType([ 
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func)
  ])
};

NavBar.defaultProps = {
  OtherButtons: [], 
};

export default NavBar;
