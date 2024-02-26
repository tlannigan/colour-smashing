import React from 'react';

function TopBar({ points }) {
    return (
        <div className='flex justify-between h-10'>
            <div className='flex items-center px-2 font-bold'>{"🎨 " + points}</div>
            <button className='px-2 font-bold'>Pause</button>
        </div>
    )
}

export default TopBar;