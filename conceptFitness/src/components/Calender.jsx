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
  const [firstLoad, setFirstLoad] = useState(false)
  const [firstDay, setFirstDay] = useState("")
  const [lastDay, setLastDay] = useState("")
  const [currDay, setCurrDay] = useState(0)
  const [boxes, setBoxes] = useState([])
  // const {days, addProgramToDay, removeProgramFromDay} = useCalendarContext();

  const currDate = () => {
    var curr = dayjs()
    firstDate = (curr.subtract(curr.day(), 'days')).toDate()
    lastDate = (dayjs(firstDate).add(6, 'days')).toDate()

    setFirstDay(dayjs(firstDate).format('MMM D, YYYY'))
    setLastDay(dayjs(lastDate).format('MMM D, YYYY'))
    setCurrDay(curr.day())
  }

  const changeWeek = (i) => {
    var firstDateNew = (dayjs(firstDay).add((7 * i), 'days')).toDate()
    setFirstDay(dayjs(firstDateNew).format('MMM D, YYYY'))
    // console.log(firstDay)

    var lastDateNew = (dayjs(firstDateNew).add(6, 'days')).toDate()
    setLastDay(dayjs(lastDateNew).format('MMM D, YYYY'))
    // console.log(lastDay)
  }

  const generateCalender = () => {
    if (!firstDay) return;
    var boxesList = []
    for (var i = 0; i < 7; i++) {
      var boxDate = (dayjs(firstDay).add(i, 'days')).format('MMM D, YYYY')
      boxesList.push(<CalenderBox key={i} Day={i} Date={boxDate}></CalenderBox>)
    }
    setBoxes(boxesList)
  }

  useEffect(() => {
    currDate()
  }, [])

  useEffect(() => {
    generateCalender()
  }, [firstDay])

  const focusCalender = () => {
    if(!firstLoad) {
      setTimeout(() => {
        const cal = document.getElementById("calender"); 
        const calObject = cal.getBoundingClientRect();
        cal.scrollLeft =  calObject.width * (((currDay - 1) * 0.5 ) + 0.25); 
        setFirstLoad(true)
      }, 10); 
    }
  }

  return (
    <div className="w-[90%] h-[35%] bg-[#eeede8] rounded-lg shadow-lg flex flex-col items-start justify-between mt-6 pl-3 pr-3 pt-2 pb-2 font-bold border-4 border-[#D8C3A5] z-2 overflow-hidden text-[#E85A4F]">        
      <div className='flex sticky h-[20%] top-0 w-full left-0 align-middle items-center justify-between'>
        <button className='bg-[#D8C3A5] w-8 h-8 justify-center items-center' onClick={() => changeWeek(-1)}>
          <ArrowLeftIcon fontSize='large'/>
        </button>
        <p className='flex text-2xl font-semibold pb-1 pt-1 relative'>{firstDay.substring(0, firstDay.indexOf(","))} - {lastDay.substring(0, lastDay.indexOf(","))} 
          <p className='absolute text-sm -right-10'> {firstDay.substring(firstDay.indexOf(",") + 2,)}</p>
        </p>
        <button className='bg-[#D8C3A5] w-8 h-8 justify-center items-center' onClick={() => changeWeek(1)}>
          <ArrowRightIcon fontSize='large'/>
        </button>
      </div>
      <div id="calender" className='flex flex-grow h-full w-full overflow-x-auto scrollbar-none' onLoad={focusCalender()}>
        {boxes}
      </div>
    </div>
  )
}

export default Calender
