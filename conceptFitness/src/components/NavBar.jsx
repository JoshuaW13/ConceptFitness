import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function NavBar({ FirstButton, SecondButton, OtherButtons, PageTitle }) {
  const otherButtonsArray = Array.isArray(OtherButtons) ? OtherButtons : [];

  return (
    <nav className="navbar p-2">
      {FirstButton && <FirstButton />}
      {otherButtonsArray.map((getButtonProps, index) => {
        // Invoke the function to get the component and props
        const { component: ButtonComponent, props } = getButtonProps();
        return <ButtonComponent key={index} {...props} />;
      })}
      {PageTitle&& <h2 className=" flex justify-center items-center text-2xl font-bold text-gray-800">{PageTitle}</h2>}
      {SecondButton && <SecondButton />}
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
