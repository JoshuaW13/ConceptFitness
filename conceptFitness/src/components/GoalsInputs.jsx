import React, { useState } from 'react'
import '../App.css'

function GoalsInputs({ onSave, onCancel, initialData, unitSystem }) {

    const [formData, setFormData] = useState(initialData)

    const weightUnit = unitSystem === 'metric' ? 'kg' : 'lbs'

    // Handle input change, sanitize numerical values
    const handleChange = (e) => {
        const { name, value } = e.target

        // Sanitize numerical values for 'targetWeight'
        const sanitizedValue = name === 'targetWeight'
            ? value.replace(/[^0-9.]/g, '')  // Allow only digits and one decimal point
                .replace(/(\..*?)\..*/g, '$1')  // Ensure only one decimal point
            : value  // No sanitization for other fields

        setFormData({
            ...formData,
            [name]: sanitizedValue
        })
    }

    const handleSave = () => {
        onSave(formData)
        sessionStorage.setItem('goalsData', JSON.stringify(formData))
    }

    return (
        <div className='flex flex-col gap-4'>
            {/* Goal selection */}
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Goal</p>
                    <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="input-field w-[50%] text-sm"
                    >
                        <option value="Select Goal">Select</option>
                        <option value="Lose Weight">Lose Weight</option>
                        <option value="Gain Weight">Gain Weight</option>
                        <option value="Maintain Weight">Maintain Weight</option>
                    </select>
                </div>
            </div>

            {/* Target Weight input */}
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Target Weight ({weightUnit})</p>
                    <input
                        type="text"
                        name="targetWeight"
                        value={formData.targetWeight}
                        onChange={handleChange}
                        className="input-field w-[50%]"
                    />
                </div>
            </div>

            {/* Target Date input */}
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Target Date</p>
                <input
                    type="date"
                    name="targetDate"
                    value={formData.targetDate}
                    onChange={handleChange}
                    className="input-field w-[50%]"
                    style={{ colorScheme: "light" }}
                />
            </div>

            {/* Save/Cancel buttons */}
            <div className='flex justify-center'>
                <button onClick={onCancel} className='cancel-button'>
                    Cancel
                </button>
                <button onClick={handleSave} className='save-button'>
                    Save
                </button>
            </div>

        </div>
    )
}

export default GoalsInputs
