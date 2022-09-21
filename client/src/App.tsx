import React,{useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import QuizContainer from './components/QuizContainer';
import QuizzesPage from './pages/QuizzesPage'
import Home from './pages/Home'
import logo from './logo.svg';
import './App.css';
import QuizPage from './pages/QuizPage';
import KanjiDictionaryPage from './pages/KanjiDictionaryPage'
import KanjiDictionary from './components/KanjiDictionary'
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<Home/>}>
        <Route path="/home/quizzes" element={<QuizzesPage/>}/>

        <Route path="/home/quiz" element={<QuizPage/>}>
          <Route path=":levelquiz" element={<QuizContainer/>}/>
        </Route>          
				<Route path="/home/dictionary" element={<KanjiDictionaryPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
