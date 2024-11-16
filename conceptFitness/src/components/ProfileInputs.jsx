import React from 'react'
import { useState } from 'react'
import '../App.css'

function ProfileInputs ( {onSave, initialData} ) {

    const [formData, setFormData] = useState(initialData)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSave = () => {
        onSave(formData)
        sessionStorage.setItem('profileData', JSON.stringify(formData))
    } 


    return (
        <div className='flex flex-col gap-4'>            
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Bio</p>
                <input
                    type="text"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-[50%] bg-white text-black text-sm border border-black rounded px-2 py-1"
                />
            </div>

            <div className='flex justify-center'>
                <button onClick={handleSave} className='w-[20%] bg-green-300 p-1 m-2'>
                    Save
                </button>
            </div>

        </div>
    )
}

export default ProfileInputs