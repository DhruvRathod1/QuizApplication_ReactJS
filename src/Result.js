import React, { useContext } from 'react';
import { QuizContext } from './QuizHolder';
import './Result.css'; // Import the CSS file

function Result() {
  const { quizzes, correct } = useContext(QuizContext);

  // Calculate the score percentage
  const scorePercentage = (correct / quizzes.length) * 100;

  // Generate a detailed result summary
  const resultSummary = quizzes.map((quiz, index) => (
    <div key={index}>
      <p>Question {index + 1}:</p>
      <p>Correct Answer: {quiz.correct}</p>
      <p>Your Answer: {quiz.selected}</p>
    </div>
  ));

  return (
    <div className="result-container">
      <h2>Your Exam is Completed</h2>
      <div className="brief-message">
        {/* Add your custom message here */}
      </div>
      <div className="score-info">
        <p>Your Score: {correct} / {quizzes.length}</p>
        <p>Score Percentage: {scorePercentage.toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default Result;
