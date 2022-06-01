import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import FetchKanji from './hooks/FetchKanji'

interface kanjiProps {
  kun_readings: string
}

function App() {
  const state: kanjiProps = FetchKanji()

  return (
    <div className="App">
      
      {state.kun_readings}
    </div>
  );
}

export default App;
