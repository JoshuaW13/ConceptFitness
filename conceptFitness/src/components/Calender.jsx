import '../App.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalenderBox from "../components/CalenderBox"
import { useProgramContext } from "../contexts/ProgramsContext";
import { useCalendarContext } from '../contexts/CalendarContext';
import dayjs from 'dayjs'

function Calender() {
  const navigate = useNavigate();
  var firstDate = new Date()
  var lastDate = new Date()
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const [firstDay, setFirstDay] = useState("")
  const [lastDay, setLastDay] = useState("")
  const [currDay, setCurrDay] = useState(0)
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
    const boxs = []
    for (var i = 0; i < 7; i++) {
      boxs.push(<CalenderBox Day={dayNames[i]} Date={parseInt(firstDay.slice(-2)) + i}></CalenderBox>)
    }
    return boxs
  }

  const navigatePrograms = () => {
    navigate("/programs")
  }

  useEffect(() => {
    currDate()
  }, [])

  useEffect(() => {
    const cal = document.getElementById("calendar")
    cal.scrollLeft = 1000
  }, [])


  return (
    <div className="w-[90%] h-[35%] bg-gray-50 rounded-lg shadow-lg flex flex-col items-start justify-between mt-6 pl-3 pr-3 pt-2 pb-2 border-gray border-2 overflow-x-auto scrollbar-none">        
      <div className='flex sticky h-[20%] top-0 w-full left-0 align-middle items-center justify-between pb-1'>
        <button className='flex bg-gray-300 w-8 h-8 justify-center items-center'>
          <ArrowLeftIcon fontSize='large'/>
        </button>
        <p className='text-2xl font-semibold pb-1'>{firstDay} - {lastDay} </p>
        <button className='flex bg-gray-300 w-8 h-8 justify-center items-center' onClick={changeWeek}>
          <ArrowRightIcon fontSize='large'/>
        </button>
      </div>
      <div id="calendar" className='flex h-full w-[325%]'>
        {generateCalender()}
      </div>
    </div>
  )
}

export default Calender
