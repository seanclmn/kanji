import {useEffect, useState} from 'react'

function FetchGradeKanji(grade:number) {

  const url = `https://kanjiapi.dev/v1/kanji/grade-${grade}`
  const [gradeKanjiData,setGradeKanjiData]=useState<string[]>([])


  
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const result = await fetch(url)
        const data = await result.json()
        return data
      }
      catch{
        return []
      }
    }

    fetchData().then((res)=>{
      console.log(res)
      setGradeKanjiData(res)
    })
  },[grade])

  console.log(gradeKanjiData)

  return (
    {gradeKanjiData}
  )
}

export default FetchGradeKanji
