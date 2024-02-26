import React from 'react';

function SubmitButton({ onClick }) {
    return (
        <div className='flex justify-center mt-[3vh]'>
            <button className='basis-11/12 bg-gray-100 py-4 rounded-full font-bold' onClick={() => onClick()}>Submit</button>
        </div>
    )
}

export default SubmitButton;