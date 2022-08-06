//@ts-nocheck
import {useEffect,useState } from 'react'

// Hooks
import FetchGradeKanji from './FetchGradeKanji'

export const FetchQuizAnswers = (kanjiLevel:number,questions:number) => {
  const questionsArray:Array[] = []

  const fetchWrongAnswers = (kanjiLevel,answerLength) => {
    const answers:string[] = []
    const kanjiArray = FetchGradeKanji(kanjiLevel).gradeKanjiData
  
    const fetchWrongAnswer = () => {
      const wrongAnswer = kanjiArray[Math.floor(Math.random()*kanjiArray.length)]
      answers.push(wrongAnswer)

      if(answers.length < answerLength-1){
        fetchWrongAnswer()
      }
    }

    fetchWrongAnswer()
    return answers

  }

  for(let i=0;i<questions;i++) {
    questionsArray.push({ 
      question: "here's a question son",
      answers: fetchWrongAnswers(kanjiLevel,4)
    })
  }

  return(questionsArray)
}