import React from 'react';
import '../App.css';

function DateInput({ searchDate }) {
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;  // Get the selected date
    searchDate(selectedDate);  // Call the searchDate function and pass the date
  };

  return (
    <form className="flex items-end justify-center gap-2 m-3">
      <label htmlFor="date" className="block text-lg font-semibold text-black">
        Date:
      </label>
      <input
        type="date"
        id="date"
        name="date"
        onChange={handleDateChange}  // Handle the change event
        className="bg-white mt-1 p-1 text-sm block w-32 border border-gray-300 rounded-lg shadow-sm"
        style={{ colorScheme: "light" }}
      />
    </form>
  );
}

export default DateInput;
