import React from 'react'

// ChatGPT was used to assist in styling the cancel confirmation pop-up
function CancelPopup({ onConfirmCancel, onKeepEditing }) {
    return (
        <div className='pop-up container absolute p-2 inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className="popup bg-white rounded-lg p-6 shadow-lg w-full max-w-[90%] sm:max-w-[400px] h-[90%  ]">
                <h2 className="text-black text-lg font-semibold mb-3">Are you sure you want to cancel?</h2>
                <p className="text-sm text-black">Your changes will be discarded</p>    
                <div className='flex'>
                    <button onClick={onKeepEditing} className="bg-[#EAE7DC] text-[#E85A4F] w-[50%] mt-4 text-sm flex items-center justify-center border-2 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow">
                        No, Keep Editing
                    </button>
                    <button onClick={onConfirmCancel} className="bg-[#E85A4F] text-white w-[50%] mt-4 ml-2 p-2 text-sm flex items-center justify-center border-2 border-[#D8C3A5] hover:border-[#E85A4F] rounded-2xl font-bold flex-grow">
                        Yes, Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CancelPopup