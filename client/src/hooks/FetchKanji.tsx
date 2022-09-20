import {useEffect,useState} from 'react'


export interface DataResult {
  strokes: Number,
  grade: Number,
  freq: Number,
  jlpt_old: Number,
  jlpt_new: Number,
  meanings: [String],
  readings_on: [String],
  readings_kun: [String],
  wk_level: Number,
  wk_meanings: [String],
  wk_readings_on: [String],
  wk_readings_kun: [String],
  wk_radicals: [String],
  kanji: String
}

export const FetchKanji = (kanji:string) => {
  const url = `http://localhost:8082/api/kanji/fullkanjilist/${kanji}`
  const [kanjiData,setKanjiData]=useState<DataResult[]|null>(null)
  
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

    if(kanji.length>0)  {
      fetchData().then((res)=>{
      console.log(res)
      setKanjiData(res)
    })
  }
  },[kanji])

  return (
    {kanjiData}
  )
}