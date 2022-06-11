//@ts-nocheck
import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { selectKanji, changeKanji } from './features/kanji/kanjiSlice';
import { useAppDispatch } from './app/hooks';
import logo from './logo.svg';
import './App.css';

import FetchKanji from './hooks/FetchKanji'

function App() {
  const kanjiStore: {kanji: string} = useSelector(selectKanji)
  const dispatch = useAppDispatch();

  const [kanji,setKanji]=useState("")
  const {kanjiData} = FetchKanji(kanjiStore.kanji)

  return (
    <div className="App" style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
      <p>{kanjiStore.kanji}</p>
      <form onSubmit={(event)=>{
        event?.preventDefault()
        dispatch(changeKanji(kanji))
        }}>
          
        <input type="text" onChange={(event)=>setKanji(event.target.value)} />
      </form>

      {/* {kanjiData.kun_readings && kanjiData.kun_readings.map((rd)=><p key={rd}>{rd}</p>)} */}
      
    </div>
  );
}

export default App;
