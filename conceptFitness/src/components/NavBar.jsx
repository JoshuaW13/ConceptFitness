import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function NavBar({ FirstButton, SecondButton, OtherButtons, PageTitle }) {
  const otherButtonsArray = Array.isArray(OtherButtons) ? OtherButtons : [];

  return (
    <nav className="navbar p-2 flex justify-between items-center">
      <div className="left-buttons flex items-center">
        {FirstButton && <FirstButton />}
        {otherButtonsArray.map((getButtonProps, index) => {
          // Invoke the function to get the component and props
          const { component: ButtonComponent, props } = getButtonProps();
          return <ButtonComponent key={index} {...props} />;
        })}
        {PageTitle && (
          <h2 className="text-xl font-bold text-gray-800 mx-4">{PageTitle}</h2>
        )}
      </div>
      {SecondButton && <div className="ml-auto">{<SecondButton />}</div>}
    </nav>
  );
}

NavBar.propTypes = {
  FirstButton: PropTypes.func,
  SecondButton: PropTypes.func,
  OtherButtons: PropTypes.arrayOf(PropTypes.func), // Array of functions that return component/props objects
};

NavBar.defaultProps = {
  OtherButtons: [],
};

export default NavBar;
