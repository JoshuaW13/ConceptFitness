import React, { useState } from 'react';
import '../App.css';

function DropDown({ InitialComponent: InitialComponentProp, HiddenComponents }) {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleInitialClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    const InitialComponent = () => (
        <InitialComponentProp onClick={handleInitialClick} />
    );

    const hiddenComponentsArray = Array.isArray(HiddenComponents) ? HiddenComponents : [HiddenComponents];

    return (
        <div className="w-full flex flex-col items-center max-h-full">
            <InitialComponent />
            {isContentVisible && (
                <div
                    className={`flex flex-col gap-4 bg-white w-full p-4 rounded-lg shadow-md mt-2 transition-all duration-300 ease-in-out transform ${hiddenComponentsArray.length === 1 ? 'overflow-clip' : 'overflow-y-auto'}`}
                    style={{ maxHeight: isContentVisible ? '400px' : '0' }} // Control the expansion height
                >
                    {hiddenComponentsArray.map((Component, index) => (
                        <Component key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDown;
