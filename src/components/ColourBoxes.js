import React from 'react';

function ColourBoxes({ leftColour, rightColour }) {
    return (
        <div className='flex h-[20vh] mb-8'>
            <div className='basis-1/2' style={{ backgroundColor: getRgbCss(leftColour) }}></div>
            <div className='basis-1/2' style={{ backgroundColor: getRgbCss(rightColour) }}></div>
        </div>
    )
}

function getRgbCss(rgb) {
    return `rgb(${rgb[0] + " " + rgb[1] + " " + rgb[2]})`;
}

export default ColourBoxes;