import '../App.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React, { useEffect, useState } from 'react';

function Calender() {
  var firstDate = new Date()
  var lastDate = new Date()
  const [firstDay, setFirstDay] = useState("")
  const [lastDay, setLastDay] = useState("")
  const [currDay, setCurrDay] = useState(0)

  const currDate = () => {
    var curr = new Date; 
    firstDate.setDate(curr.getDate() - curr.getDay())
    lastDate.setDate(firstDate.getDate() + 6)

    setFirstDay(firstDate.toDateString().substring(4, 10))
    setLastDay(lastDate.toDateString().substring(4, 10))
    setCurrDay(curr.getDay())

    console.log("Testing")
  }

  const changeWeek = (direction) =>{
    firstDate.setDate(firstDate.getDate() + (7 * direction))
    lastDate.setDate(firstDate.getDate() + 6)
    
    setFirstDay(firstDate.toDateString().substring(4, 10))
    setLastDay(lastDate.toDateString().substring(4, 10))

    console.log(firstDate)
    console.log(lastDate)
  }

  useEffect(() => {
    currDate()
  }, [])

  useEffect(() => {
    const cal = document.getElementById("calendar")
    cal.scrollLeft = ((cal.scrollWidth / 14) * Math.max(((2 * (currDay - 1)) - 1), 0))
  }, [])


  return (
    <div id="calendar" className="w-[90%] h-[35%] bg-gray-50 rounded-lg shadow-lg flex flex-col items-start justify-between mt-6 pl-3 pr-3 pt-2 pb-2 border-gray border-2 overflow-x-auto scrollbar-none">        
      <div className='flex sticky top-0 w-full left-0 align-middle items-center justify-between pb-1'>
        <button className='bg-gray-300'>
          <img src={ArrowLeftIcon} alt="" className="h-6 w-6 text-black"  onClick={() => changeWeek(-1)}/>
        </button>
        <p className='text-2xl font-semibold pb-1'>{firstDay} - {lastDay} </p>
        <button className='bg-gray-300'>
          <img src={ArrowRightIcon} alt="" className="h-6 w-6 text-black" onClick={() => changeWeek(1)}/>
        </button>
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
