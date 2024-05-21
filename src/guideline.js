import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Guideline.css';

function Guideline() {
  const [examStarted, setExamStarted] = useState(false);

  const startExam = () => {
    setExamStarted(true);
  };

  return (
    <div className="center-container">
      <div className="custom-exam-card">
        <h1 className="guidelines-text">Exam Guidelines</h1>
        <div className="guidelines-list">
          <ul>
            <li>Be punctual and arrive on time for the exam.</li>
            <li>Arrange for stable Internet connectivity.</li>
            <li>Giving examination on Laptop or Desktop is highly recommended.</li>
            <li>Login to the portal 10 min before the online examination start time.</li>
            <li>Close all browsers/tabs before starting the online examination.</li>
            <li>Once the exam starts, do not switch to any other window/tab. On doing so, your attempt may be considered as malpractice and your exam may get terminated.</li>
            <li>Do Not Pickup/Receive the Call during the exam if you are giving the exam on mobile. This also will be treated as changing the window.</li>
            <li>To avoid unwanted pop-ups, use of Ad Blocker is recommended.</li>
            <li>Clear browser cache memory on mobile and laptops. Clear browsing history and also delete temp files.</li>
            <li>Follow all instructions provided by the exam proctor or platform.</li>
            <li>Maintain exam integrity and avoid cheating or plagiarism.</li>
            <li>Review your answers before submitting.</li>
            <li>Submit your completed exam on time.</li>
            <li>Respect exam proctors and fellow participants.</li>
            <li>Familiarize yourself with emergency procedures.</li>
          </ul>
        </div>
        {!examStarted ? (
          <Link to="/guideline">
            <button className="start-button" onClick={startExam}>Accept</button>
          </Link>
        ) : (
          <Link to="/Quiz">
            <button className="goto-quiz-button">Click to Start</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Guideline;
