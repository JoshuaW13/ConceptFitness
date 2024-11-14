import React from 'react'
import { useState } from 'react'
import '../App.css'
import editIcon from '../assets/EditIcon.png'
import MetricsInputs from './MetricsInputs'
import MetricsInfo from './MetricsInfo'

function MetricsWindow() {
    const [showMetricsInput, setShowMetricsInput] = useState(false)
    const [showMetricsInfo, setShowMetricsInfo] = useState(true)

    const [metricsData, setMetricsData] = useState({
        age: '',
        weight: '',
        height: '',
        activityLevel: ''
    })

    const handleEditIcon = () => {
        setShowMetricsInput(true)
        setShowMetricsInfo(false)
    }

    const handleSave = (data) => {
        setMetricsData(data)
        setShowMetricsInput(false)
        setShowMetricsInfo(true)
    }

    return (
        <div className="w-full max-w-lg bg-gray-50 rounded-lg shadow-lg flex flex-col border border-gray-300 text-black p-1 relative">
            <div>
                <button onClick={handleEditIcon} className='absolute top-2 right-2 bg-gray-300'>
                    <img src={editIcon} alt="" className='w-6 h-6 p-1'></img>
                </button>
            </div>
            <div className='mt-10'>
                {showMetricsInput && <MetricsInputs onSave={handleSave} initialData={metricsData} />}
                {showMetricsInfo && <MetricsInfo data={metricsData} />}
            </div>
            
        </div>
    )
}

export default MetricsWindow