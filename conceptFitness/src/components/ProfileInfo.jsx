import React from 'react'
import '../App.css'
import ProfilePicture from '../assets/profilePicture.svg'

function ProfileInfo ( {data} ) {
    return (
        <div className="flex p-4 relative">
            <div className='flex flex-col items-center justify-center w-1/4'>
              <div className="w-[70%] h-[70%] mb-1">
                <img src={ProfilePicture}></img>
              </div>
              <p className='text-black text-sm'>Olivia Carter</p>
            </div>

            <div className='flex flex-col justify-center w-2/3 pl-2'>
              <p className='text-black text-sm'>{data.bio}</p>
            </div>
        </div>
    )
}

export default ProfileInfo