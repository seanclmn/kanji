import React,{useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectKanji, changeKanji } from './features/kanji/kanjiSlice';
import { useAppDispatch } from './app/hooks';
import {KanjiCard} from './components/KanjiCard'
import QuizzesPage from './pages/QuizzesPage'
import Home from './pages/Home'
import logo from './logo.svg';
import './App.css';

import FetchKanji from './hooks/FetchKanji'
import FetchGradeKanji from './hooks/FetchGradeKanji'
import QuizPage from './pages/QuizPage';

function App() {
  // const kanjiStore: {kanji: string} = useSelector(selectKanji)
  // const dispatch = useAppDispatch();
  //
  // const [kanji,setKanji]=useState("")
  // const {kanjiData} = FetchKanji(kanjiStore.kanji)
  //
	// const {gradeKanjiData} = FetchGradeKanji(1)
	// console.log(gradeKanjiData)
  return (
    // <div className="App" style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
    //   <p>{kanjiStore.kanji}</p>
    //   <form onSubmit={(event)=>{
    //     event?.preventDefault()
    //     dispatch(changeKanji(kanji))
    //     }}>
    //
    //     <input type="text" onChange={(event)=>setKanji(event.target.value)} />
    //   </form>
		// 	<KanjiCard kanji={kanjiStore.kanji}/>
    //   {/* {kanjiData.kun_readings && kanjiData.kun_readings.map((rd)=><p key={rd}>{rd}</p>)} */}
    //
    // </div>


    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="quizzes" element={<QuizzesPage/>}/>

        <Route path="/quiz" element={<QuizPage/>}>
          <Route path=":levelquiz" element={<QuizPage/>}/>
        </Route>

          

      </Route>
    </Routes>
  );
}

export default App;
