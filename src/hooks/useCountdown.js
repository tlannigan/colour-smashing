import { useEffect, useState } from 'react';

export const useCountdown = (remainingTime) => {
    const [countdown, setCountdown] = useState(remainingTime)

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearInterval(interval);
    })

    return countdown;
};