// @ts-nocheck
import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import QuizAnswerButton from './QuizAnswerButton'

import FetchKanji from '../hooks/FetchKanji'

import {Button} from '@mantine/core'

export interface QuizGameProps {
  questions: Question[]|string[]
  endQuiz: Function
}

export interface Question{
  question: string[]
  options: OptionProps[]
}

export interface OptionProps {
  correct: boolean
  optionName: string
}

function QuizGame({questions, endQuiz}:QuizGameProps) {
  console.log(questions)
  const [questionIndex,setQuestionIndex]=useState(0)
  const [answered,setAnswered]=useState(true)
  const [colors,setColors]=useState(["blue","blue","blue","blue"])

  const phraseQuestion = () => {
    switch(questions[questionIndex].question[0]) {
      case "readings_on":
        return <h3 className="font-normal">{questionIndex+1}. Which kanji has an <b>on</b> reading of <b>{questions[questionIndex].question[1]}</b></h3 >
      case "readings_kun":
        return <h3 className="font-normal">{questionIndex+1}. Which kanji has a <b>kun</b> reading of <b>{questions[questionIndex].question[1]}</b></h3 >
      case "meanings":
        return <h3 className="font-normal">{questionIndex+1}. Which kanji has a meaning of <b>{questions[questionIndex].question[1]}</b></h3 >
    }

  }

  const nextQuestion = () => {
    setQuestionIndex(questionIndex+1)
    setAnswered(true)
    setColors(["blue","blue","blue","blue"])
  }

  const answerQuestion = (index:number) => {
    if(answered){
      
      setAnswered(false)
      let newColors = colors
      if(questions[questionIndex].options[index].correct)
        newColors[index] = "green"
      else
        newColors[index] = "red"

      setColors(newColors)
    }
  }

  return (
    <div className="mx-auto w-[70%]">
      {phraseQuestion()}
      <div className="grid grid-cols-2 gap-4">
        {questions[questionIndex].options.map((option,index)=> 
          <Button 
            onClick={()=>(answerQuestion(index))}
            color={colors[index]}
            key={index}
            size="md"
            >
              {option.optionName}
            </Button>)}
      </div>

      <div className='flex flex-row justify-center my-[50px]'>
        {questionIndex < questions.length-1 ? 
          <Button 
            size="md" 
            disabled={answered} 
            onClick={()=>nextQuestion()}
            >
              Next
            </Button>: 
          <Button 
            size="md" 
            disabled={answered} 
            onClick={()=>endQuiz()}
          >
            Finish
          </Button>}
      </div>  
    </div>
 )
}

export default QuizGame
