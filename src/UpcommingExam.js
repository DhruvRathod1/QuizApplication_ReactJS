import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcommingExam.css';

function UpcomingExam() {
  const [examStates, setExamStates] = useState({});
  const exams = [
    {
      id: 1,
      name: 'FM',
      date: '18-09-23',
      time: '8:00 AM to 9:30 AM',
    },
    {
      id: 2,
      name: 'AWT',
      date: '18-09-23',
      time: '12:10 PM to 01:40 PM',
    },
    {
      id: 3,
      name: 'DAA',
      date: '20-09-23',
      time: '8:00 AM to 9:30 AM',
    },
    {
      id: 4,
      name: 'CCE',
      date: '20-09-23',
      time: '12:10 PM to 01:40 PM',
    },
    {
      id: 5,
      name: 'DSE',
      date: '21-09-23',
      time: '8:00 AM to 9:30 AM',
    },
  ];

  const startExam = (examId) => {
    setExamStates({ ...examStates, [examId]: true });
  };

  return (
    <div className="upcoming-exam-container">
      {exams.map((exam) => (
        <div key={exam.id} className="exam-card">
          <h1>Upcoming Exam: {exam.name}</h1>
          <p>
            There is an upcoming exam scheduled for <br />
            Date: {exam.date} <br />
            Time: {exam.time}.
          </p>
          {!examStates[exam.id] ? (
            <Link to="/guideline"> {/* Link to "/guideline" */}
              <button className="start-exam-button" onClick={() => startExam(exam.id)}>
                Start Exam
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="goto-guideline-button">Start</button>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default UpcomingExam;
