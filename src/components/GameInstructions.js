import React from 'react';

function GameInstructions({ text }) {
    return (
        <div className='text-center font-bold text-2xl px-4 my-4'>
            <h2>{text}</h2>
        </div>
    )
}

export default GameInstructions;