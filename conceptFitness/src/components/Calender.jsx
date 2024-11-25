import '../App.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Popup_Bot from './Popup_Bot';
import Menu from "@mui/icons-material/Menu";
import CalenderPopup from "../components/CalenderPopup";

function Calender() {
  const navigate = useNavigate();
  var firstDate = new Date()
  var lastDate = new Date()
  const [firstDay, setFirstDay] = useState("")
  const [lastDay, setLastDay] = useState("")
  const [currDay, setCurrDay] = useState(0)

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const currDate = () => {
    var curr = new Date; 
    firstDate.setDate(curr.getDate() - curr.getDay())
    lastDate.setDate(firstDate.getDate() + 6)

    setFirstDay(firstDate.toDateString().substring(4, 10))
    setLastDay(lastDate.toDateString().substring(4, 10))
    setCurrDay(curr.getDay())

    console.log("Testing")
  }

  const changeWeek = () =>{
    firstDate.setTime(firstDate.getTime() + (7 * 86400000))
    setFirstDay(firstDate.toDateString().substring(4, 10))
    console.log(firstDate)

    lastDate.setTime(firstDate.getTime() + (6 * 86400000))
    setLastDay(lastDate.toDateString().substring(4, 10))
    console.log(lastDate)
  }

  const navigatePrograms = () =>{
    navigate("/programs")
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
          <img src={ArrowLeftIcon} alt="" className="h-6 w-6 text-black"/>
        </button>
        <p className='text-2xl font-semibold pb-1'>{firstDay} - {lastDay} </p>
        <button className='bg-gray-300'>
          <img src={ArrowRightIcon} alt="" className="h-6 w-6 text-black" onClick={() => changeWeek()}/>
        </button>
      </div>
      <div className='flex h-[20%] w-[350%]'>
        <div className='relative h-full w-full border-black border-2'>
          <p className='text-l font-semibold'>Sunday</p>
          <p className='absolute -top-1 right-0.5 text-black '>{parseInt(firstDay.slice(-2)) + 0}</p>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p className='text-l font-semibold'>Monday</p>
          <p className='absolute -top-1 right-0.5 text-black '>{parseInt(firstDay.slice(-2)) + 1}</p>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p className='text-l font-semibold'>Tuesday</p>
          <p className='absolute -top-1 right-0.5 text-black '>{parseInt(firstDay.slice(-2)) + 2}</p>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p className='text-l font-semibold'>Wednesday</p>
          <p className='absolute -top-1 right-0.5 text-black '>{parseInt(firstDay.slice(-2)) + 3}</p>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p className='text-l font-semibold'>Thursday</p>
          <p className='absolute -top-1 right-0.5 text-black '>{parseInt(firstDay.slice(-2)) + 4}</p>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p className='text-l font-semibold'>Friday</p>
          <p className='absolute -top-1 right-0.5 text-black '>{parseInt(firstDay.slice(-2)) + 5}</p>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p className='text-l font-semibold'>Saturday</p>
          <p className='absolute -top-1 right-0.5 text-black '>{parseInt(firstDay.slice(-2)) + 6}</p>
        </div>
      </div>
      <div className='relative flex h-full w-[350%]'>
        <div className='relative h-full w-full border-black border-2'>
          <p>Test</p>
          <div>
            <button className='absolute h-6 w-6 bottom-0.5 right-0.5 bg-gray-300'
              onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                event.stopPropagation();  // Prevent the event from bubbling up to the parent
              }}
              >
              <Menu />
            </button>
          </div>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p>Test</p>
          <div>
            <button className='absolute h-6 w-6 bottom-0.5 right-0.5 bg-gray-300'
              onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                event.stopPropagation();  // Prevent the event from bubbling up to the parent
              }}
              >
              <Menu />
            </button>
          </div>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p>Test</p>
          <div>
            <button className='absolute h-6 w-6 bottom-0.5 right-0.5 bg-gray-300'
              onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                event.stopPropagation();  // Prevent the event from bubbling up to the parent
              }}
              >
              <Menu />
            </button>
          </div>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p>Test</p>
          <div>
            <button className='absolute h-6 w-6 bottom-0.5 right-0.5 bg-gray-300'
              onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                event.stopPropagation();  // Prevent the event from bubbling up to the parent
              }}
              >
              <Menu />
            </button>
          </div>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p>Test</p>
          <div>
            <button className='absolute h-6 w-6 bottom-0.5 right-0.5 bg-gray-300'
              onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                event.stopPropagation();  // Prevent the event from bubbling up to the parent
              }}
              >
              <Menu />
            </button>
          </div>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p>Test</p>
          <div>
            <button className='absolute h-6 w-6 bottom-0.5 right-0.5 bg-gray-300'
              onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                event.stopPropagation();  // Prevent the event from bubbling up to the parent
              }}
              >
              <Menu />
            </button>
          </div>
        </div>
        <div className='relative h-full w-full border-black border-2'>
          <p>Test</p>
          <div>
            <button className='absolute h-6 w-6 bottom-0.5 right-0.5 bg-gray-300'
              onClick={(event) => {setIsPopupVisible(!isPopupVisible)
                event.stopPropagation();  // Prevent the event from bubbling up to the parent
              }}
              >
              <Menu />
            </button>
          </div>
        </div>
        {isPopupVisible && (
        <Popup_Bot
          onClick={(event) => {
            event.stopPropagation();  // Prevent the event from bubbling up to the parent
            setIsPopupVisible(false);  // Close the popup
          }} 
          Content={CalenderPopup} 
        />
        )}
      </div>
    </div>
  )
}

export default Calender
