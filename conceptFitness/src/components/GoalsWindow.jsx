import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import editIcon from '../assets/EditIcon.png'
import GoalsInfo from './GoalsInfo'
import GoalsInputs from './GoalsInputs'

function GoalsWindow( {unitSystem} ) {

    const [showGoalsInfo, setShowGoalsInfo] = useState(true)
    const [showGoalsInput, setShowGoalsInput] = useState(false)

    const [goalsData, setGoalsData] = useState({
        goal: '',
        currentWeight: '',
        targetWeight: '',
        targetDate: ''
    })

    const handleEdit = () => {
        setShowGoalsInput(true)
        setShowGoalsInfo(false)
    }

    const handleSave = (data) => {
        setGoalsData(data)
        setShowGoalsInput(false)
        setShowGoalsInfo(true)
    }

    useEffect(() => {
        const savedData = sessionStorage.getItem('goalsData');
        if (savedData) {
            setGoalsData(JSON.parse(savedData));
        }
    }, []);

    return (
        <div className="w-full max-w-lg bg-gray-50 rounded-lg shadow-lg flex flex-col border border-gray-300 text-black p-1 relative">
            <div>
                <button onClick={handleEdit} className='absolute top-2 right-2 bg-gray-300'>
                    <img src={editIcon} alt="" className='w-6 h-6 p-1'></img>
                </button>
            </div>
            <div className='mt-10'>
                {showGoalsInput && <GoalsInputs onSave={handleSave} initialData={goalsData} unitSystem={unitSystem} />}
                {showGoalsInfo && <GoalsInfo data={goalsData} unitSystem={unitSystem} />}
            </div>            
        </div>
    )
}

export default GoalsWindow