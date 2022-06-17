import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { selectKanji, changeKanji } from './features/kanji/kanjiSlice';
import { useAppDispatch } from './app/hooks';
import {KanjiCard} from './components/KanjiCard'
import logo from './logo.svg';
import './App.css';

import FetchKanji from './hooks/FetchKanji'
import FetchGradeKanji from './hooks/FetchGradeKanji'

function App() {
  const kanjiStore: {kanji: string} = useSelector(selectKanji)
  const dispatch = useAppDispatch();

  const [kanji,setKanji]=useState("")
  const {kanjiData} = FetchKanji(kanjiStore.kanji)

	const {gradeKanjiData} = FetchGradeKanji(1)
	console.log(gradeKanjiData)
  return (
    <div className="App" style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
      <p>{kanjiStore.kanji}</p>
      <form onSubmit={(event)=>{
        event?.preventDefault()
        dispatch(changeKanji(kanji))
        }}>
          
        <input type="text" onChange={(event)=>setKanji(event.target.value)} />
      </form>
			<KanjiCard kanji={kanjiStore.kanji}/>
      {/* {kanjiData.kun_readings && kanjiData.kun_readings.map((rd)=><p key={rd}>{rd}</p>)} */}
      
    </div>
  );
}

export default App;
