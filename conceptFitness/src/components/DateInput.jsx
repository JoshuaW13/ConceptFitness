import React from 'react';
import '../App.css';

function DateInput({ searchDate }) {
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;  // Get the selected date
    searchDate(selectedDate);  // Call the searchDate function and pass the date
  };

  return (
    <form className="flex justify-center items-center gap-2">
      <label htmlFor="date" className="block text-xs font-medium text-gray-700">
        Date:
      </label>
      <input
        type="date"
        id="date"
        name="date"
        onChange={handleDateChange}  // Handle the change event
        className="mt-1 p-1 text-sm block w-32 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
      />
    </form>
  );
}

export default DateInput;
