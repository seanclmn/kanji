import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';
import ProgressCircle from './ProgressCircle'


interface QuizCardProps {
  progress: number
}


const QuizCard = ({progress}: QuizCardProps) =>{

  return(

    <Card withBorder p="xl" radius="md">
      <div></div>

      <div >
        <ProgressCircle
          progress={90}
        />

      </div>
    </Card>
  )
}

export default QuizCard
