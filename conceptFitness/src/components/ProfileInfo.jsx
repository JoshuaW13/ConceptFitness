import React from 'react'
import '../App.css'
import ProfilePicture from '../assets/profilePicture.png'

function ProfileInfo ( {data} ) {
    return (
        <div className="flex p-4 relative">
            <div className='flex flex-col justify-center w-1/2'>
              <div className="w-[70%] mb-1">
                <img src={ProfilePicture} className='mb-1'></img>
                <p className='text-black text-sm'>Olivia Carter</p>
              </div>
            </div>

            <div className='flex flex-col justify-center w-[80%] pl-2'>
              <p className='text-black text-sm'>{data.bio || 'Write a Bio...'}</p>
            </div>
        </div>
    )
}

export default ProfileInfo