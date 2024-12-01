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
                <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    placeholder='Write a Bio...'
                    maxLength={60}
                    className="w-[100%] bg-white text-black text-sm border border-black rounded px-2 py-1"
                ></textarea>
            </div>

            <div className='flex justify-center'>
                <button onClick={handleSave} className='w-[30%] bg-green-300 p-1 text-black'>
                    Save
                </button>
            </div>

        </div>
    )
}

export default ProfileInputs