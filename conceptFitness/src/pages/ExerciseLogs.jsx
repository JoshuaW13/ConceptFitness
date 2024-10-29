import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/NavBar';
import HomeButton from '../components/HomeButton';

function ExerciseLogs() {

    return (
        <div className='w-full h-full flex flex-col items-center gap-2'>
            <NavBar FirstButton={HomeButton} />
            <div className='bg-black w-[75%] rounded-lg'>
                <input type="text" placeholder='Search...' className='text-black bg-gray-300 w-full' />
            </div>
            <form>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" />
            </form>
        </div>
    );
}

export default ExerciseLogs;
