import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import QuizHolder from './QuizHolder';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizHolder>
      <App />   
    </QuizHolder>
  </React.StrictMode>
);
