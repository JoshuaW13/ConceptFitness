import '../App.css';
import React from 'react';

function ProgramHeader({ InitialComponent: InitialComponentProp, InitialProps}) {
    const InitialComponent = InitialComponentProp;

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex text-black w-full rounded-lg shadow-md bg-gray-200">
                {React.createElement(InitialComponent, InitialProps)}
            </div>
        </div>
    );
}

export default ProgramHeader;
