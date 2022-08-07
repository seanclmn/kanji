// Hooks
import { useEffect } from 'react'
import { useState } from 'react'
import FetchGradeKanji from './FetchGradeKanji'


export interface QuestionProps {
  question: string
  answers: AnswerProps[]
}

export interface AnswerProps {
  option: string
  correct:boolean
}

export const fetchWrongAnswers = (answer:string,answers:AnswerProps[],kanjiArray:string[],answerLength:number) => {
  const wrongAnswer:AnswerProps = {option: kanjiArray[Math.floor(Math.random()*kanjiArray.length)],correct: false}
  
  if(wrongAnswer.option!==answer){
    answers.push(wrongAnswer)
  }

  if(answers.length < answerLength-1){
    fetchWrongAnswers(answer,answers,kanjiArray,answerLength)
  }
  else {
    answers.push({option: answer, correct:true})
  }
  return(shuffle(answers))
}

export const fetchAnswerOptions = (kanjiLevel:number,answerLength:number,numberOfQuestions:number) => {

  const questionsArray:QuestionProps[] = []
  const kanjiArray = FetchGradeKanji(kanjiLevel).gradeKanjiData
  if(kanjiArray.length > 0) {
    for(let i=0;i<numberOfQuestions;i++) {
      const correctAnswer: string = kanjiArray[Math.floor(Math.random()*kanjiArray.length)]
      questionsArray.push({ 
        question: "here's a question son",
        answers: fetchWrongAnswers(correctAnswer,[],kanjiArray,answerLength)
      })
    }
  }

  return questionsArray

}

function shuffle(array:AnswerProps[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const FetchQuizAnswers = (kanjiLevel:number,questions:number) => {
  return(fetchAnswerOptions(kanjiLevel,questions,4))
}