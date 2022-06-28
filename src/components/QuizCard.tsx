import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';

interface QuizCardProps {
  progress: number
}


const QuizCard = ({progress}: QuizCardProps) =>{

  return(

    <Card withBorder p="xl" radius="md" >
      <div></div>

      <div >
        <RingProgress
          roundCaps
          thickness={6}
          size={150}
          sections={[{ value: progress, color: 'blue'}]}
          label={
            <div>
              <Text align="center" size="lg" sx={{ fontSize: 22 }}>
                {progress}%
              </Text>
              <Text align="center" size="xs" color="dimmed">
                Completed
              </Text>
            </div>
          }
        />
      </div>
    </Card>
  )
}

export default QuizCard
