import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import QuizEnd from './QuizEnd'
import QuizGame from './QuizGame'
import QuizStart from './QuizStart'

import { changeScore } from '../features/kanji/kanjiSlice';
import { useAppDispatch } from '../app/hooks';

import { FetchQuizAnswers } from '../hooks/FetchQuizAnswers'

export type LevelQuizProps = {
  levelquiz: string
}

export interface QuestionProps {
  question: string
  answers: string[]
}

function QuizContainer() {
  const dispatch = useAppDispatch();
  let {levelquiz} = useParams<LevelQuizProps>()
  const [stage,setStage]=useState("start")
  const questions = FetchQuizAnswers(parseFloat(String(levelquiz)),4)

  const startQuiz = () => {
    setStage("game")
  }

  const endQuiz = () => {
    setStage("end")
    dispatch(changeScore({level: parseFloat(String(levelquiz))+1, newScore:90}))
  }  

  return (
    <>
      {stage==="start" && <QuizStart startQuiz={startQuiz}/>}
      
      {stage==="game" && <QuizGame questions={questions} endQuiz={endQuiz}/>}

      {stage==="end" && <QuizEnd/>}
      
      
    </>
  )
}

export default QuizContainer
