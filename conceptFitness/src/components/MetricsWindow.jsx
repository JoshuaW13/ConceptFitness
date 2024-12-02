import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import editIcon from '../assets/EditIcon.png'
import MetricsInputs from './MetricsInputs'
import MetricsInfo from './MetricsInfo'
import CancelPopup from './CancelPopup'

function MetricsWindow( {unitSystem} ) {

    const [showMetricsInfo, setShowMetricsInfo] = useState(true)
    const [showMetricsInput, setShowMetricsInput] = useState(false)
    const [showCancelPopup, setShowCancelPopup] = useState(false)

    const [metricsData, setMetricsData] = useState({
        age: '',
        weight: '',
        height: '',
        activityLevel: ''
    })

    const handleEdit = () => {
        setShowMetricsInput(true)
        setShowMetricsInfo(false)
    }

    const handleSave = (data) => {
        setMetricsData(data)
        setShowMetricsInput(false)
        setShowMetricsInfo(true)
    }

    const handleCancel = () => {
        setShowCancelPopup(true)
    }

    const handleConfirmCancel = () => {
        setShowCancelPopup(false)
        setShowMetricsInfo(true)
        setShowMetricsInput(false)
    }

    const handleKeepEditing = () => {
        setShowCancelPopup(false)
        setShowMetricsInput(true)
        setShowMetricsInfo(false)
    }

    useEffect(() => {
        const savedData = sessionStorage.getItem('metricsData');
        if (savedData) {
            setMetricsData(JSON.parse(savedData));
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
                {showMetricsInput && <MetricsInputs
                    onSave={handleSave}
                    onCancel={handleCancel}
                    initialData={metricsData}
                    unitSystem={unitSystem}
                />}
                {showCancelPopup && <CancelPopup
                    onConfirmCancel={handleConfirmCancel}
                    onKeepEditing={handleKeepEditing}
                />}
                {showMetricsInfo && <MetricsInfo data={metricsData} unitSystem={unitSystem} />}
            </div>
            
        </div>
    )
}

export default MetricsWindow