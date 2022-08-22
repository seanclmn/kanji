import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import QuizAnswerButton from './QuizAnswerButton'

import FetchKanji from '../hooks/FetchKanji'

import {Button} from '@mantine/core'

interface QuizGameProps {
  questions: Question[]
  endQuiz: Function
}

interface Question{
  question: string
  answers: AnswerProps[]
}

export interface AnswerProps {
  option: string
  correct:boolean
}

function QuizGame({questions, endQuiz}:QuizGameProps) {
  const [questionIndex,setQuestionIndex]=useState(0)
  const [answered,setAnswered]=useState(true)
  const [colors,setColors]=useState(["blue","blue","blue","blue"])

  const kanjiForQuestion: string = FetchKanji(correctAnswer).kanjiData.kun_readings[0]

  const nextQuestion = () => {
    setQuestionIndex(questionIndex+1)
    setAnswered(true)
    setColors(["blue","blue","blue","blue"])
  }

  const answerQuestion = (index:number) => {
    if(answered){
      
      setAnswered(false)
      let newColors = colors
      if(questions[questionIndex].answers[index].correct)
        newColors[index] = "green"
      else
        newColors[index] = "red"

      setColors(newColors)
    }
  }

  return (
    <div className="mx-auto w-[70%]">
      <p>{questions[questionIndex].question}</p>
      <div className="grid grid-cols-2 gap-4">
        {questions[questionIndex].answers.map((answer:AnswerProps,index:number)=> 
          <Button 
            onClick={()=>(answerQuestion(index))}
            color={colors[index]}
            key={index}
            size="md"
            >
              {answer.option}
            </Button>)}
      </div>

      <div className='flex flex-row justify-center my-[50px]'>
        {questionIndex < questions.length-1 ? <Button size="md" disabled={answered} onClick={()=>nextQuestion()}>Next</Button>: <Button size="md" disabled={answered} onClick={()=>endQuiz()}>Finish</Button>}

      </div>  
    </div>
 )
}

export default QuizGame
