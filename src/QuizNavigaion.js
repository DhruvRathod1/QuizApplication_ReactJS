import React from 'react';

function QuizNavigation({ quizzes, currentQuestionIndex, setCurrentQuestionIndex }) {
  const questionNumbers = quizzes.map((_, index) => index + 1);

  const handleGoToQuestion = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
  };

  return (
    <div className="quiz-navigation">
      <div className="quiz-navigation-grid">
        {questionNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handleGoToQuestion(number - 1)} // Adjust for 0-based index
            className={currentQuestionIndex === number - 1 ? 'active' : ''}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizNavigation;