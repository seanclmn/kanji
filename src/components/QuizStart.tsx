import React from 'react'
import {Button} from '@mantine/core'

interface StartQuizProps {
  startQuiz: Function
}

function QuizStart({startQuiz}: StartQuizProps) {

  return (
    <div>
      start!
      <Button onClick={()=>startQuiz()}>Start</Button>
    </div>
  )
}

export default QuizStart
