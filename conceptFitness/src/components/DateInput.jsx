import React from 'react';
import '../App.css';

function DateInput() {
  return (
    <form className="flex justify-center items-center gap-2">
        <label htmlFor="date" className="block text-xs font-medium text-gray-700">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="mt-1 p-1 text-sm block w-32 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
    </form>
  );
}

export default DateInput;
