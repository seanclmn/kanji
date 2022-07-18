import React,{useState} from 'react'
import {useParams} from 'react-router-dom'

import QuizGame from './QuizGame'
import {Button} from '@mantine/core'


function QuizContainer() {
  let {levelquiz} = useParams()
  const [questionIndex,setQuestionIndex]=useState(0)


  const questions = [
    { 
      question: "here's a question son",
      answers: ["test","womp","wadda ya want", "nah"]
    },
    {
      question: "here's another one",
      answers: ["one","two","three","four"]
    }
  ]

  const nextQuestion = () => {
    setQuestionIndex(questionIndex+1)
  }
    
  

  return (
    <>
      <div>{levelquiz}</div>
      <QuizGame question={questions[questionIndex].question} answers={questions[questionIndex].answers}/>
      {questionIndex < questions.length-1 && <Button onClick={()=>nextQuestion()}>Next</Button>}
      
    </>
  )
}

export default QuizContainer
