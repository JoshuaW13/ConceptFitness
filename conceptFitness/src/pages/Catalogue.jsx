import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';
import SlidingDrawer from '../components/SlidingDrawer';
import CatalogueDrawerContent from '../components/CatalogueDrawerContent';

function Catalogue() {

  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <NavBar FirstButton={HomeButton}></NavBar>
      
      <input type="text" className="w-[75%] h-8" placeholder="Search..." />
      <div className="overflow-y-auto w-[95%] border-black border-4 border-solid m-4">
        <div className="border-black border-2 text-black border-solid flex m-2 float-right w-[95%] justify-between">
          <div className="m-1"> 
            <p>Exercise 1</p>
            <p>Testing</p>
          </div>
          <div className="flex flex-col justify-between m-2">
            <button className="w-7 h-7 shrink-0 bg-white border-black border-2 leading-none p-0 flex justify-center text-[20px] items-start">+</button>
            <button className="w-7 h-7 shrink-0 bg-white border-black border-2 leading-none p-0 flex justify-center text-[20px] items-start">...</button>
          </div>
        </div>
      </div>
      <SlidingDrawer Content={CatalogueDrawerContent}></SlidingDrawer>
    </div>
  );
}

export default Catalogue;
