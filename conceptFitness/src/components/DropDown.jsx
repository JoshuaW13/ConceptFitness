import React, { useState } from 'react';
import '../App.css';

function DropDown({ InitialComponent: InitialComponentProp, HiddenComponents }) {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleInitialClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    const InitialComponent = () => <InitialComponentProp onClick={handleInitialClick} />;

    const hiddenComponentsArray = Array.isArray(HiddenComponents) ? HiddenComponents : [HiddenComponents];

    return (
        <div className='w-full flex flex-col items-center max-h-[100%]'>
            <InitialComponent />
            {isContentVisible && (
                <div className={`flex flex-col gap-2 bg-gray-300 w-full p-2 ${hiddenComponentsArray.length === 1 ? 'overflow-clip' : 'overflow-y-auto'} scrollbar-hidden`}>
                    {hiddenComponentsArray.map((Component, index) => (
                        <Component key={index} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDown;
