import React from 'react'
import {useParams} from 'react-router-dom'
import QuizAnswerButton from './QuizAnswerButton'

interface QuizGameProps {
  question: string
  answers: string[]
}

function QuizGame({question, answers}:QuizGameProps) {

  return (
    <div className="mx-auto w-[70%]">
      <p>{question}</p>
      <div className="grid grid-cols-2 gap-4">
        {answers.map(answer=> <QuizAnswerButton key={answers.indexOf(answer)} text={answer}/>)}
      </div>
    </div>
 )
}

export default QuizGame
