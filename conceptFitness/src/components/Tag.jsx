import React from 'react'
import '../App.css'


function Tag({text}) {

  return (
    <span className='rounded-sm bg-gray-50 text-sm p-[0.1%]'>
        #{text}
    </span>
  )
}

export default Tag
