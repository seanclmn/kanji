import React from 'react'
import {Button} from '@mantine/core'

interface StartQuizProps {
  startQuiz: Function
  gradeLevel: string | undefined
}

function QuizStart({startQuiz, gradeLevel}: StartQuizProps) {

  return (
    <div
      className="
        w-[100%]
        h-[50%]
        flex
        flex-col
        justify-center
        items-center
      "
      >
      <h2>Start Kanji Quiz (Grade {gradeLevel})</h2>
      <Button className="h-[40px] w-[80px] text-lg" onClick={()=>startQuiz()}>Start</Button>
    </div>
  )
}

export default QuizStart
