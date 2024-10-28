import { useState } from 'react';
import React from 'react';
import '../App.css';

function NavBar({ FirstButton, SecondButton }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 w-full rounded-tr rounded-tl max-h-[12%]">
      {FirstButton && <FirstButton />}
      {SecondButton && <SecondButton />}
    </nav>
  );
}

export default NavBar;
