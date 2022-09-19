import axios from 'axios'
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


export const FetchQuizQuestions = (kanjiLevel:number,numberOfQuestions:number) => {
  const [quizQuestions,setQuizQuestions]=useState<string[]>([])


  useEffect(()=>{
    const fetchQuestions = async () => {
      try{
        const result = await axios.get(`http://localhost:8082/api/kanji/kanjiquestions/${kanjiLevel}/${numberOfQuestions}`)

        const data = await result.data
        return data
      }
      catch{
        return null
      }
    }

    if(quizQuestions.length==0){
      fetchQuestions().then((res)=>{
        setQuizQuestions(res)
      })
    }


  },[kanjiLevel,numberOfQuestions])

  return quizQuestions

  

}