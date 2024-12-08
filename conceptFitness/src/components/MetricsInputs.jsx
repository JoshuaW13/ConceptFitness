import React, { useState } from 'react'
import '../App.css'

// ChatGPT was used to assist in saving the input data to the metrics info page

function MetricsInputs({ onSave, onCancel, initialData, unitSystem }) {
    const [formData, setFormData] = useState(initialData)

    const weightUnit = unitSystem === 'metric' ? 'kg' : 'lbs'
    const heightUnit = unitSystem === 'metric' ? 'cm' : 'ft/in'

    // Handle numeric inputs and sanitize them
    const handleChange = (e) => {
        const { name, value } = e.target

        // Sanitize input to allow only positive numbers (whole numbers or decimals if necessary)
        const sanitizedValue = name === 'weight' || name === 'height' 
            ? value.replace(/[^0-9.]/g, '')  // Allow decimal for weight and height
                .replace(/(\..*?)\..*/g, '$1') // Allow only one decimal point
            : name === 'activityLevel'  // For activity level, no sanitization required
                ? value
                : value.replace(/[^0-9]/g, '')  // For age, allow only integers

        setFormData({
            ...formData,
            [name]: sanitizedValue,
        })
    }

    const handleSave = () => {
        onSave(formData)
        sessionStorage.setItem('metricsData', JSON.stringify(formData))
    }

    return (
        <div className='flex flex-col gap-4'>
            {/*ChatGPT used to generate the following three inputs and buttons*/}
            {/* Age Input */}
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Age</p>
                    <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="input-field w-[50%]"
                    />
                </div>
            </div>

            {/* Weight Input */}
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Weight ({weightUnit})</p>
                    <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="input-field w-[50%]"
                    />
                </div>
            </div>

            {/* Height Input */}
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Height ({heightUnit})</p>
                    {unitSystem === 'metric' ? (
                        <input
                            type="text"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            className="input-field w-[50%]"
                        />
                    ) : (
                        <div className="flex gap-2 w-[50%]">
                            <input
                                type="text"
                                name="heightFt"
                                value={formData.heightFt || ''}
                                onChange={handleChange}
                                className="input-field w-[35%]"
                                placeholder="ft"
                            />
                            <input
                                type="text"
                                name="heightIn"
                                value={formData.heightIn || ''}
                                onChange={handleChange}
                                className="input-field w-[35%]"
                                placeholder="in"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Activity Level Input */}
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Activity Level</p>
                <select
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleChange}
                    className="input-field text-sm w-[50%]"
                >
                    <option value="" disabled>Select</option>
                    <option value="Sedentary">Sedentary</option>
                    <option value="Lightly Active">Lightly Active</option>
                    <option value="Active">Active</option>
                    <option value="Very Active">Very Active</option>
                </select>
            </div>

            {/* Save/Cancel Buttons */}
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

export default MetricsInputs
