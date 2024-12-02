import React, { useState } from 'react';
import '../App.css';
import DropDownArrow from "@mui/icons-material/ArrowDropDown";

function DropDown({ InitialComponent: InitialComponentProp, HiddenComponents, InitialProps , HiddenProps}) {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = () => {
        setIsContentVisible(!isContentVisible);
        setIsPressed(true);
        console.log(isPressed)
        setTimeout(() => {setIsPressed(false);}, 100); 
        console.log(isPressed)
    };

    const InitialComponent = InitialComponentProp;

    const hiddenComponentsArray = Array.isArray(HiddenComponents) ? HiddenComponents : [HiddenComponents];

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex text-black w-full rounded-t-lg shadow-md" style = {{backgroundColor: isPressed ? 'rgb(209 213 219)' : '#EAE7DC', transition: 'background-color 0.3s ease'}} onClick={handleClick}>
                {/* Render InitialComponent */}
                <DropDownArrow
                    className=" cursor-pointer"
                    sx={{
                        transition: 'transform 0.3s ease',
                        transform: isContentVisible ? 'rotate(-90deg)' : 'rotate(0deg)', // Rotate when content is visible
                    }}
                />
                {React.createElement(InitialComponent, InitialProps)}
                
                {/* Position the DropDownArrow absolutely to overlap */}
                
            </div>

            {isContentVisible && (
                <div
                    className={`flex flex-col gap-4 bg-white w-full p-2 rounded-b-lg shadow-md transition-all duration-300 ease-in-out transform ${hiddenComponentsArray.length === 1 ? 'overflow-clip' : 'overflow-y-auto'}`}
                    style={{
                        opacity: isContentVisible ? 1 : 0,
                        transform: isContentVisible ? 'translateY(0)' : 'translateY(-10px)',
                    }}
                >
                     {hiddenComponentsArray.map((Component, index) => (
                        React.createElement(Component, { ...HiddenProps, key: index })
                    ))}
                </div>
            )}
        </div>
    );
}

export default DropDown;
