import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

export function ProgressBar({ countdownFrom }) {
    const remainingTime = useCountdown(countdownFrom);

    const widthPercentage = getTimeRemainingPercentage(remainingTime, countdownFrom);
    return (
        <div id='progress-bar' className='w-full h-5 bg-amber-100'>
            <div id='progress' className='h-full bg-amber-400' style={{ width: widthPercentage + "%" }}></div>
        </div>
    )
}

function getTimeRemainingPercentage(remaining, max) {
    return (remaining / max) * 100;
}

export default ProgressBar