import React, { useState } from 'react';
import '../App.css';

function CatalogueDrawerContent() {

  return (
    <div className="p-3">
          <div className="flex flex-row justify-between m-2">
            <input type="text" className="w-[75%] h-8" placeholder="Program Name" />
            <button className=''></button>
          </div>
          <div className="flex flex-row justify-between m-2">
            <p>Tags:</p>
            <input type="text" className="w-[75%] h-8" placeholder="Arm, Upper Body, Triceps, etc..." />
          </div>
          <div className="overflow-y-auto w-[95%] h-24 border-black border-4 border-solid m-4">
            {/* Example Exercise Entries */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="border-black border-2 text-black border-solid flex m-2 float-right w-[95%] justify-between">
                <div className="m-1">
                  <p>Exercise {index + 1}</p>
                  <p>Testing</p>
                </div>
                <div className="flex flex-col justify-between m-2">
                  <button className="w-7 h-7 shrink-0 bg-white border-black border-2 leading-none p-0 flex justify-center text-[20px] items-start">+</button>
                  <button className="w-7 h-7 shrink-0 bg-white border-black border-2 leading-none p-0 flex justify-center text-[20px] items-start">...</button>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}

export default CatalogueDrawerContent;
