import React from 'react'
import {useParams} from 'react-router-dom'
import QuizAnswerButton from './QuizAnswerButton'

function QuizGame() {
  let {levelquiz} = useParams()
  console.log(levelquiz)

  return (
    <div className="mx-auto w-[70%]">

      


      <div className="grid grid-cols-2 gap-4">
        <QuizAnswerButton text="test"/>
        <QuizAnswerButton text="test"/>
        <QuizAnswerButton text="test"/>
        <QuizAnswerButton text="test"/>
      </div>
    </div>
 )
}

export default QuizGame
