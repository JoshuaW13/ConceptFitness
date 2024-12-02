import '../App.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalenderBox from "../components/CalenderBox"
import { useProgramContext } from "../contexts/ProgramsContext";
import dayjs from 'dayjs'

function Calender() {
  const navigate = useNavigate();
  var firstDate = new Date()
  var lastDate = new Date()
  const [firstDay, setFirstDay] = useState("")
  const [lastDay, setLastDay] = useState("")
  const [currDay, setCurrDay] = useState(0)
  const boxs = []
  // const {days, addProgramToDay, removeProgramFromDay} = useCalendarContext();

  const currDate = () => {
    var curr = dayjs()
    firstDate = (curr.subtract(curr.day(), 'days')).toDate()
    lastDate = (dayjs(firstDate).add(6, 'days')).toDate()

    setFirstDay(dayjs(firstDate).format('MMM D'))
    setLastDay(dayjs(lastDate).format('MMM D'))
    setCurrDay(curr.day())
  }

  const changeWeek = () => {
    console.log(firstDate)
    firstDate = (dayjs(firstDate).add(7, 'days')).toDate()
    setFirstDay(dayjs(firstDate).format('MMM D'))
    console.log(firstDate)

    lastDate = (dayjs(firstDate).add(6, 'days')).toDate()
    setLastDay(dayjs(lastDate).format('MMM D'))
  }

  const generateCalender = () => {
    for (var i = 0; i < 7; i++) {
      boxs.push(<CalenderBox Day={i} Date={parseInt(firstDay.slice(-2)) + i}></CalenderBox>)
    }
    return boxs
  }

  useEffect(() => {
    currDate()
  }, [])

  const focusCalender = () => {
    setTimeout(() => {
      const cal = document.getElementById("calender"); 
      const calObject = cal.getBoundingClientRect();
      cal.scrollLeft =  calObject.width * (((currDay - 1) * 0.5 ) + 0.25); 
    }, 50); 
  }

  return (
    <div className="w-[90%] h-[35%] bg-gray-50 rounded-lg shadow-lg flex flex-col items-start justify-between mt-6 pl-3 pr-3 pt-2 pb-2 border-gray border-2 z-2">        
      <div className='flex flex-col sticky h-[20%] top-0 w-full left-0 align-middle items-center justify-between'>
        <button className='bg-gray-300 w-8 h-8 justify-center items-center hidden'>
          <ArrowLeftIcon fontSize='large'/>
        </button>
        <p className='flex text-2xl font-semibold pb-1 pt-1'>{firstDay} - {lastDay} </p>
        <button className='bg-gray-300 w-8 h-8 justify-center items-center hidden' onClick={changeWeek}>
          <ArrowRightIcon fontSize='large'/>
        </button>
      </div>
      <div id="calender" className='flex flex-grow h-full w-full overflow-x-auto' onLoad={focusCalender()}>
        {generateCalender()}
      </div>
    </div>
  )
}

export default Calender
