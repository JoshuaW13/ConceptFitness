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
        <div className='relative h-full w-full border-black border-2'>
            <p className='text-l font-semibold'>Sunday</p>
            <p className='absolute -top-1 right-0.5 text-black '>{parseInt(firstDay.slice(-2)) + 0}</p>
        </div>
    );
}

export default DropDown;
