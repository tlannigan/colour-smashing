import React, { useState } from 'react'
import TopBar from '../../components/TopBar'
import ProgressBar from '../../components/ProgressBar'
import ColourBoxes from '../../components/ColourBoxes'
import ColourChanger from '../../components/ColourChanger'
import SubmitButton from '../../components/SubmitButton'
import GameInstructions from '../../components/GameInstructions'

function Matching({ difficulty = 0 }) {
    const [rgb, setRgb] = useState([0, 0, 0]);
    const [targetRgb, setTargetRgb] = useState(getRandomColour());
    const [points, setPoints] = useState(0);

    const decrement = (index) => {
        const newColour = [rgb[0], rgb[1], rgb[2]];
        newColour[index]--;
        setRgb(newColour);
    };

    const increment = (index) => {
        const newColour = [rgb[0], rgb[1], rgb[2]];
        newColour[index]++;
        setRgb(newColour);
    };

    const updateRgb = (event, index) => {
        const newColour = [rgb[0], rgb[1], rgb[2]];
        newColour[index] = event.target.value;
        setRgb(newColour);
    }

    const checkForWin = () => {
        if (getColourMatchPercent(rgb, targetRgb) < 5) {
            showWin();
        } else {
            showLoss();
        }
        resetGame();
    }

    const resetGame = () => {
        setTargetRgb(getRandomColour());
        setRgb([0, 0, 0]);
    }

    const showWin = () => {
        setPoints(points + 1);
    }

    const showLoss = () => {
        setPoints(0);
    }

    return (
        <div className='max-w-xl mx-auto flex flex-col'>
            <TopBar points={points} />
            <ProgressBar countdownFrom={3000} />
            <ColourBoxes leftColour={rgb} rightColour={targetRgb} />
            <GameInstructions text={"Match the colour on the right"} />
            <ColourChanger colour={0} value={rgb} updateRgb={updateRgb} decrement={decrement} increment={increment} />
            <ColourChanger colour={1} value={rgb} updateRgb={updateRgb} decrement={decrement} increment={increment} />
            <ColourChanger colour={2} value={rgb} updateRgb={updateRgb} decrement={decrement} increment={increment} />
            <SubmitButton onClick={checkForWin} />
        </div>
    )
}

function getRandomColour() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
};

function getColourMatchPercent(rgb, targetRgb) {
    const totalDifference = Math.abs(rgb[0] - targetRgb[0]) + Math.abs(rgb[1] - targetRgb[1]) + Math.abs(rgb[2] - targetRgb[2]);
    return ((totalDifference / 3) / 255) * 100;
}

export default Matching;