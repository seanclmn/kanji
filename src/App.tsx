//@ts-nocheck
import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import FetchKanji from './hooks/FetchKanji'

interface kanjiProps {
  kun_readings: string
}

function App() {
  const [kanji,setKanji]=useState("")
  const [kanjiSearch,setKanjiSearch]=useState("")
  const {kanjiData} = FetchKanji(kanjiSearch)
  console.log(kanjiData)

  return (
    <div className="App" style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
      <form onSubmit={(event)=>{
        event?.preventDefault()
        setKanjiSearch(kanji)}}>
        <input type="text" onChange={(event)=>setKanji(event.target.value)} />
      </form>

      {kanjiData.kun_readings && kanjiData.kun_readings.map((rd)=><p>{rd}</p>)}
      
    </div>
  );
}

export default App;
