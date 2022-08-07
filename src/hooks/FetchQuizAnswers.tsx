import {useEffect,useState } from 'react'

// Hooks
import FetchGradeKanji from './FetchGradeKanji'


export interface QuestionProps {
  question: string
  answers: string[]
}


export function shuffle(array:string[]) {
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


export const fetchWrongAnswers = (answer: string,answers:string[],kanjiArray:string[],answerLength:number) => {
  const wrongAnswer = kanjiArray[Math.floor(Math.random()*kanjiArray.length)]
  console.log(answer)
  
  if(wrongAnswer!==answer){
    answers.push(wrongAnswer)
  }

  if(answers.length < answerLength-1){
    fetchWrongAnswers(answer,answers,kanjiArray,answerLength)
  }
  else {
    answers.push(answer)
    return(answers)
  }
  return(answers)
}

export const fetchAnswerOptions = (kanjiLevel:number,answerLength:number,numberOfQuestions:number) => {

  const questionsArray:QuestionProps[] = []
  const kanjiArray = FetchGradeKanji(kanjiLevel).gradeKanjiData

  console.log(kanjiArray)
  if(kanjiArray.length > 0) {
    for(let i=0;i<numberOfQuestions;i++) {
      console.log(kanjiArray)
      const correctAnswer: string = kanjiArray[Math.floor(Math.random()*kanjiArray.length)]
      questionsArray.push({ 
        question: "here's a question son",
        answers: fetchWrongAnswers(correctAnswer,[],kanjiArray,answerLength)
      })
    }
  }

  return questionsArray

}

export const FetchQuizAnswers = (kanjiLevel:number,questions:number) => {

  return(fetchAnswerOptions(kanjiLevel,questions,4))
}