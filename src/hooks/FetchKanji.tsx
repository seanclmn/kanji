import {useEffect,useState} from 'react'

function FetchKanji(kanji:string) {

  interface dataResult {
    kun_readings: string[]
  }

  const url = `https://kanjiapi.dev/v1/kanji/${kanji}`
  const [kanjiData,setKanjiData]=useState<dataResult>({kun_readings: [""]})


  
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
      setKanjiData(res)
    })
  },[kanji])

  return (
    {kanjiData}
  )
}

export default FetchKanji
