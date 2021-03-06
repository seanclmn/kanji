import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import QuizAnswerButton from './QuizAnswerButton'

import {Button} from '@mantine/core'

interface QuizGameProps {
  questions: Question[]
  endQuiz: Function
}

interface Question{
  question: string
  answers: string[]
}

function QuizGame({questions, endQuiz}:QuizGameProps) {
  const [questionIndex,setQuestionIndex]=useState(0)

  const nextQuestion = () => {
    setQuestionIndex(questionIndex+1)
  }

  return (
    <div className="mx-auto w-[70%]">
      <p>{questions[questionIndex].question}</p>
      <div className="grid grid-cols-2 gap-4">
        {questions[questionIndex].answers.map(answer=> <QuizAnswerButton key={questions[questionIndex].answers.indexOf(answer)} text={answer}/>)}
      </div>

      <div className='flex flex-row justify-center my-[50px]'>
        {questionIndex < questions.length-1 ? <Button onClick={()=>nextQuestion()}>Next</Button>: <Button onClick={()=>endQuiz()}>Finish</Button>}

      </div>  
    </div>
 )
}

export default QuizGame
