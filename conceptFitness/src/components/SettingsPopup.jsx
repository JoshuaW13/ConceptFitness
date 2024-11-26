import React from 'react'
import '../App.css'

function SettingsPopup( {onClose} ) {
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
                                className="w-[50%] bg-white border border-black rounded px-2 py-1 text-sm text-black"
                            >
                                <option value="Select Goal">Select</option>
                                <option value="Lose Weight">Metric</option>
                                <option value="Gain Weight">Imperial</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <button
                    onClick={onClose}
                    className="mt-4 bg-[#E85A4F] text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                    Save and Close
                </button>
            </div>
        </div>
    )

}

export default SettingsPopup;