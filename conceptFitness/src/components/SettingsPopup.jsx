import React from 'react'
import '../App.css'
import { useState } from 'react'

function SettingsPopup({ onClose, onUnitChange }) {

    const [selectedUnit, setSelectedUnit] = useState('')

    const handleUnitSelection = (e) => {
        setSelectedUnit(e.target.value)
    }

    const handleSave = () => {
        onUnitChange(selectedUnit)
        onClose()
    }

    return (
        <div className="absolute p-2 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] sm:w-[400px]">
                <h2 className="text-black text-lg font-semibold mb-4">Settings</h2>
                <div className='flex flex-col gap-4'>            
                    <div className="flex flex-row items-center w-full max-w-md gap-4">
                        <div className='flex flex-row items-center w-full max-w-md gap-4'>
                            <p className="w-[25%] text-right text-black">Units</p>
                            <select
                                name="units"
                                value={selectedUnit}
                                className="w-[50%] bg-white border border-black rounded px-2 py-1 text-sm text-black"
                                onChange={handleUnitSelection}
                            >
                                <option value="Select Metric">Select</option>
                                <option value="metric">Metric</option>
                                <option value="imperial">Imperial</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <button
                    onClick={handleSave}
                    className="mt-4 bg-[#E85A4F] text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                    Save and Close
                </button>
            </div>
        </div>
    )

}

export default SettingsPopup;