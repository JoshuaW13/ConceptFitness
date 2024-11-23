import '../App.css'
import CalenderImage from "../assets/weeklycalender.png"
import React, { useEffect, useState } from 'react';

function Calender() {
  const [firstDay, setFirstDay] = useState("")
  const [lastDay, setLastDay] = useState("")
  const [currDay, setCurrDay] = useState(0)

  const getDate = () => {
    var curr = new Date; 
    var first = curr.getDate() - curr.getDay(); 
    var last = first + 6; 
    
    setFirstDay(new Date(curr.setDate(first)).toDateString().substring(4, 10))
    setLastDay(new Date(curr.setDate(last)).toDateString().substring(4, 10))
    setCurrDay(curr.getDay())

    console.log(firstDay)
    console.log(lastDay)
  }

  useEffect(() => {
    getDate()
  })

  useEffect(() => {
    const cal = document.getElementById("calendar")
    console.log(Math.max(((2 * (currDay - 1)) - 1), 0))
    cal.scrollLeft = ((cal.scrollWidth / 14) * Math.max(((2 * (currDay - 1)) - 1), 0))
  }, [])


  return (
    <div id="calendar" className="w-[90%] h-[35%] bg-gray-50 rounded-lg shadow-lg flex flex-col items-start justify-between mt-6 pl-3 pr-3 pt-2 pb-2 border-gray border-2 overflow-x-auto scrollbar-none">        
      <div className='sticky top-0 left-1/4 items-center'>
        <p className='text-2xl font-semibold pb-1'>{firstDay} - {lastDay} </p>
      </div>
      <div className='flex h-[20%] w-[350%]'>
        <div className='h-full w-full border-black border-2 text-l font-semibold'>
          Sunday
          <p className='static top-0 right-0'>test</p>
        </div>
        <div className='h-full w-full border-black border-2 text-l font-semibold'>
          Monday
        </div>
        <div className='h-full w-full border-black border-2 text-l font-semibold'>
          Tuesday
        </div>
        <div className='h-full w-full border-black border-2 text-l font-semibold'>
          Wednesday
        </div>
        <div className='h-full w-full border-black border-2 text-l font-semibold'>
          Thursday
        </div>
        <div className='h-full w-full border-black border-2 text-l font-semibold'>
          Friday
        </div>
        <div className='h-full w-full border-black border-2 text-l font-semibold'>
          Saturday
        </div>
      </div>
      <div className='flex h-full w-[350%]'>
        <div className='h-full w-full border-black border-2'></div>
        <div className='h-full w-full border-black border-2'></div>
        <div className='h-full w-full border-black border-2'></div>
        <div className='h-full w-full border-black border-2'></div>
        <div className='h-full w-full border-black border-2'></div>
        <div className='h-full w-full border-black border-2'></div>
        <div className='h-full w-full border-black border-2'></div>
      </div>
    </div>
  )
}

export default Calender
