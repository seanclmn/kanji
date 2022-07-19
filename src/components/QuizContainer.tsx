import React,{useState} from 'react'
import {useParams} from 'react-router-dom'

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

  const nextQuestion = () => {
    setQuestionIndex(questionIndex+1)
  }
    
  

  return (
    <>
      <div>{levelquiz}</div>
      {stage=="start" && <QuizStart startQuiz={startQuiz}/>}
      
      {stage=="game" && <QuizGame question={questions[questionIndex].question} answers={questions[questionIndex].answers}/>}

      {stage=="end" && <p>end</p>}
      {questionIndex < questions.length-1 ? <Button onClick={()=>nextQuestion()}>Next</Button>: <Button onClick={()=>endQuiz()}>Finish</Button>}
      
    </>
  )
}

export default QuizContainer
