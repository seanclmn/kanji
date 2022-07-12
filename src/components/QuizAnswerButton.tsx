import React from 'react'
import {Button} from '@mantine/core'

interface QuizAnswerButtonProps {
  text: string
}

function QuizAnswerButton({text}: QuizAnswerButtonProps) {

  return (
    <Button>{text}</Button>
  )
}

export default QuizAnswerButton
