import React,{useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import QuizContainer from './components/QuizContainer';
import QuizzesPage from './pages/QuizzesPage'
import Home from './pages/Home'
import logo from './logo.svg';
import './App.css';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="quizzes" element={<QuizzesPage/>}/>

        <Route path="/quiz" element={<QuizPage/>}>
          <Route path=":levelquiz" element={<QuizContainer/>}/>
        </Route>          

      </Route>
    </Routes>
  );
}

export default App;
