import React from 'react'

function CancelPopup({ onConfirmCancel, onKeepEditing }) {
    return (
        <div className='absolute p-2 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className="bg-white rounded-lg p-6 shadow-lg sm:w-[400px]">
                <h2 className="text-black text-lg font-semibold mb-4">Are you sure you want to cancel?</h2>
                <p className="text-sm text-black mb-2">Your changes will be discarded</p>    
                <div className='flex'>
                    <button onClick={onKeepEditing} className="button mt-4 mr-2 rounded-lg w-[50%]">
                        No, Keep Editing
                    </button>
                    <button onClick={onConfirmCancel} className="button mt-4 ml-2 bg-[#E85A4F] rounded-lg w-[50%]">
                        Yes, Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CancelPopup