import React from 'react'
import '../App.css'
import ProfilePicture from '../assets/profilePicture.png'

function ProfileInfo ( {data} ) {
    return (
        <div className="flex p-4 relative w-[95%]">
            <div className='flex flex-col justify-center w-1/2'>
              <div className="w-[70%] mb-1">
                <img src={ProfilePicture} className='mb-1'></img>
                <p className='text-black text-lg'>{ data.username || 'Username' }</p>
              </div>
            </div>
            {/* ChatGPT was used to assist in switching between the default text and the bio */}
            <div className='flex flex-col justify-center w-[80%] pl-2'>
              <p className='text-black text-lg'>{data.bio || 'Write a Bio...'}</p>
            </div>
        </div>
    )
}

export default ProfileInfo