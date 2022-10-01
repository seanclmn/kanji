import axios from 'axios'
// Hooks
import { useEffect } from 'react'
import { useState } from 'react'


export interface QuestionProps {
  question: string[]
  options: OptionProps[]
}

export interface OptionProps {
  option: string
  correct:boolean
}


export const FetchQuizQuestions = (kanjiLevel:number,numberOfQuestions:number) => {
  const [quizQuestions,setQuizQuestions]=useState<QuestionProps[]>([])


  useEffect(()=>{
    const fetchQuestions = async () => {
      try{
        const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/kanji/kanjiquestions/${kanjiLevel}/${numberOfQuestions}`)

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