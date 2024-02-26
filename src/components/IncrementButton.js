import React from 'react';

function IncrementButton({ colour, onClick, isIncrement = false }) {
    return (
        <div className='basis-2/12 text-gray-400 text-center text-6xl font-black'>
            <button className='p-2 mt-[-2rem] align-top' onClick={() => onClick(colour)}>{isIncrement ? "+" : "-"}</button>
        </div>
    )
}

export default IncrementButton;