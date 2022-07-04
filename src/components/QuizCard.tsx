import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';
import ProgressCircle from './ProgressCircle'


interface QuizCardProps {
  progress: number
	color: string
}


const QuizCard = ({progress, color}: QuizCardProps) =>{

  return(

    <Card withBorder p="xl" radius="md">
      <div></div>

      <div >
     		<RingProgress
        	sections={[{ value: progress, color: color }]}
        	label={
          	<Text color={color} weight={700} align="center" size="xl">
          	  40%
          	</Text>
        	}
      	/>
      </div>
    </Card>
  )
}

export default QuizCard
