import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'
import { useNavigate } from 'react-router-dom';

export default function Start() {
    const { setStart } = useContext(QuizContext)
    const navigate = useNavigate();
    
    // Function to handle the button click
    const handleStartClick = () => {
        setStart(true);
        navigate('/Quiz');
    };

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <button onClick={handleStartClick} className='border border-orange-500 p-3 text-5xl rounded'>Start</button>
        </div>
    )
}
