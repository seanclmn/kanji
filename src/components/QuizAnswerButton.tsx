import React from 'react'
import {Button} from '@mantine/core'

interface QuizAnswerButtonProps {
  text: string
  answerQuestion: React.MouseEventHandler<HTMLButtonElement>;
}

function QuizAnswerButton({text,answerQuestion}: QuizAnswerButtonProps) {

  return (
    <Button onClick={answerQuestion}>{text}</Button>
  )
}

export default QuizAnswerButton
