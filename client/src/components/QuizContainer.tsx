import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import QuizEnd from './QuizEnd'
import QuizGame from './QuizGame'
import QuizStart from './QuizStart'

import { changeScore } from '../features/kanji/kanjiSlice';
import { useAppDispatch } from '../app/hooks';

import { FetchQuizQuestions } from '../hooks/FetchQuizQuestions'

import {Loader} from '@mantine/core'

export type LevelQuizProps = {
  levelquiz: string
}

function QuizContainer() {
  const dispatch = useAppDispatch();
  let {levelquiz} = useParams<LevelQuizProps>()
  const [stage,setStage]=useState("start")
  console.log(levelquiz)
  const questions = FetchQuizQuestions(parseFloat(String(levelquiz)),10)
  console.log(questions)

  const startQuiz = () => {
    setStage("game")
  }

  const endQuiz = () => {
    setStage("end")
    dispatch(changeScore({level: parseFloat(String(levelquiz)), newScore:90}))
  }  
  console.log(!questions)
  if(!questions.length){
    return(
      <div 
        className='
          h-[50%] 
          w-[100%]
          flex
          flex-col
          justify-center
          items-center
          '
        >
        <h2>Kanji Quiz is loading...</h2>
        <Loader 
          size={60}
          className='
            h-[100px]
            '
          />
      </div>
    
    )}
  return (
    <div className='h-[100%]'>
      {stage==="start" && <QuizStart startQuiz={startQuiz} gradeLevel={levelquiz}/>}
      
      {stage==="game" && <QuizGame questions={questions} endQuiz={endQuiz}/>}

      {stage==="end" && <QuizEnd/>}
    </div>
  )
}

export default QuizContainer
