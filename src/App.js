import React, { useState, useContext } from 'react';
import Result from './Result';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Quiz';
import Login from './login';
import { QuizContext } from './QuizHolder';
import Guideline from './guideline';
import UpcommingExam from './UpcommingExam';


function App() {
  const { exit } = useContext(QuizContext);

  // Step 1: Create state to track login status and role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  // Step 2: Create a function to handle successful login
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              userRole === 'student' ? (
                <UpcommingExam />
              ) : (
                <Login />
              )
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/Guideline" element={<Guideline />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
