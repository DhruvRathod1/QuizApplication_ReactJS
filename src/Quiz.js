import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from './QuizHolder';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import QuizNavigation from './QuizNavigaion';


function Quiz() {
  const { quizzes, correct, setCorrect } = useContext(QuizContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [remainingTime, setRemainingTime] = useState(50); // Initial time limit
  const navigate = useNavigate();

  const currentQuestion = quizzes[currentQuestionIndex];

  // Timer effect to automatically move to the next question when time is up
  useEffect(() => {
    let timer;

    if (remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000); // Update the timer every second
    }

    // When the time is up, move to the next question
    if (remainingTime === 0) {
      handleNextQuestion();
    }

    // Clean up the timer when the component unmounts or the question changes
    return () => {
      clearInterval(timer);
    };
  }, [currentQuestionIndex, remainingTime]);

  // Function to handle option change
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Function to handle clearing the answer
  const clearAnswer = () => {
    setSelectedOption(null);
  };

  // Function to handle saving the answer and moving to the next question
  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.correct) {
      setCorrect(correct + 1);
    }

    // Move to the next question if available
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setRemainingTime(50); // Reset the timer for the next question (50 seconds)
    } else {
      // If it's the last question, submit the exam
      navigate('/Result');
    }
  };

  // Function to handle moving to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setRemainingTime(50); // Reset the timer when navigating to the previous question
    }
  };

  // Function to format the remaining time as a two-digit string (e.g., "03")
  const formatRemainingTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div className="center-container">
      <div className="quiz-container">
        <div className="exam-container">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p className="question">{currentQuestion.question}</p>
          <div className="timer">Time Remaining: {formatRemainingTime(remainingTime)}s</div>
          <div className="options-grid">
            <div className="option-pair">
              <label>
                <input
                  type="radio"
                  name="options"
                  value="a"
                  checked={selectedOption === 'a'}
                  onChange={() => handleOptionChange('a')}
                />
                A. {currentQuestion.a}
              </label>
              <label>
                <input
                  type="radio"
                  name="options"
                  value="b"
                  checked={selectedOption === 'b'}
                  onChange={() => handleOptionChange('b')}
                />
                B. {currentQuestion.b}
              </label>
            </div>
            <div className="option-pair">
              <label>
                <input
                  type="radio"
                  name="options"
                  value="c"
                  checked={selectedOption === 'c'}
                  onChange={() => handleOptionChange('c')}
                />
                C. {currentQuestion.c}
              </label>
              <label>
                <input
                  type="radio"
                  name="options"
                  value="d"
                  checked={selectedOption === 'd'}
                  onChange={() => handleOptionChange('d')}
                />
                D. {currentQuestion.d}
              </label>
            </div>
          </div>
        
        </div>
        <div>
        <div className="timer">Time Remaining: {formatRemainingTime(remainingTime)}s</div>
        <QuizNavigation
          quizzes={quizzes}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
          <div className="action-buttons">
            <button onClick={clearAnswer}>Clear</button>
            <button onClick={handleNextQuestion}>Next Question</button>
            {currentQuestionIndex > 0 && (
              <button onClick={handlePreviousQuestion}>Previous Question</button>
            )}
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Quiz;
