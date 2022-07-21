import React,{useState} from 'react'
import {useParams} from 'react-router-dom'

import QuizEnd from './QuizEnd'
import QuizGame from './QuizGame'
import QuizStart from './QuizStart'
import {Button} from '@mantine/core'


function QuizContainer() {
  let {levelquiz} = useParams()
  const [stage,setStage]=useState("start")
  const [questionIndex,setQuestionIndex]=useState(0)


  const questions = [
    { 
      question: "here's a question son",
      answers: ["test","womp","wadda ya want", "nah"]
    },
    {
      question: "here's another one",
      answers: ["one","two","three","four"]
    },
    {
      question: "here's da last one",
      answers: ["heh","hehe","hehehe","hehehehe"]
    }
  ]

  const startQuiz = () => {
    setStage("game")
  }

  const endQuiz = () => {
    setStage("end")
  }  

  return (
    <>
      {stage=="start" && <QuizStart startQuiz={startQuiz}/>}
      
      {stage=="game" && <QuizGame questions={questions} endQuiz={endQuiz}/>}

      {stage=="end" && <QuizEnd/>}
      
      
    </>
  )
}

export default QuizContainer
