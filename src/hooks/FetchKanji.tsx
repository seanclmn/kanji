import React,{useEffect,useState} from 'react'

function FetchKanji(kanji:string) {

  const url = `https://kanjiapi.dev/v1/kanji/${kanji}`
  const [kanjiData,setKanjiData]=useState({})


  
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
