import React from 'react'
import { useState } from 'react'
import '../App.css'

function ProfileInputs ( {onSave, initialData} ) {

    const maxChars = 80
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
        <div className='flex flex-col'>
            <div className="flex w-full max-w-md">
                <input
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    placeholder='New Username'
                    className='w-[100%] w-[70%] bg-white border border-black rounded px-2 py-1 mb-3 text-black text-sm'
                ></input>
            </div>       
            <div className="flex justify-center w-full max-w-md">
                <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    placeholder='Write a Bio...'
                    maxLength={maxChars}
                    className="w-[100%] bg-white text-black text-sm border border-black rounded px-2 py-1"
                ></textarea>
            </div>

            <div className="text-left text-gray-500 text-sm mb-6">
                {maxChars - formData.bio.length} characters remaining
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