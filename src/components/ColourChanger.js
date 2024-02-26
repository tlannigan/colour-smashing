import React from 'react';
import IncrementButton from './IncrementButton';

function ColourChanger({ colour, value = 0, updateRgb, decrement, increment }) {
    return (
        <div className='text-xl h-[15vh]'>
            <div id={colour + "-value"} className='text-center font-bold text-2xl py-3'>{value[colour]}</div>
            <div className='flex'>
                <IncrementButton onClick={(e) => decrement(colour)} />
                <div className='flex-grow'>
                    <input
                        id={"rgb" + colour}
                        type='range'
                        min="0"
                        max="255"
                        value={value[colour]}
                        className='w-full bg-gray-300'
                        onChange={(e) => updateRgb(e, colour)} />
                </div>
                <IncrementButton onClick={(e) => increment(colour)} isIncrement={true} />
            </div>
        </div>
    )
}

export default ColourChanger;