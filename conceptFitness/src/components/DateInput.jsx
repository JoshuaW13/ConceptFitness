import React from 'react';
import '../App.css';

function DateInput() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </form>
  );
}

export default DateInput;
