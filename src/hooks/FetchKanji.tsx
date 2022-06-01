import React,{useEffect,useState} from 'react'

function FetchKanji() {

  const url = 'https://kanjiapi.dev/v1/kanji/蛍'
  const [kanjiData,setKanjiData]=useState({kun_readings: ""})

  const fetchData = async () =>{
    try {
      const result = await fetch(url)
      return await result.json()
    }
    catch {
      console.log("ERROR ERROR ERROR")
    }
  }
  
  useEffect(()=>{
    fetchData().then((res)=>setKanjiData({kun_readings: res.kun_readings}))
  },[])

  return (
    kanjiData
  )
}

export default FetchKanji
