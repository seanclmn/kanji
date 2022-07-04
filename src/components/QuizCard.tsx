import { Text, Card, RingProgress } from '@mantine/core';
import { Link } from 'react-router-dom'


interface QuizCardProps {
	level: string
  progress: number
	color: string
	link: string
}


const QuizCard = ({level, progress, color, link}: QuizCardProps) =>{

  return(
		<Link to={link} rel="prefetch" className='no-underline'>
		  <Card 
				withBorder 
				p="xl" 
				radius="md"
				className='mb-4'
				>
				<div></div>

				<div className="flex flex-col items-center w-[100px]">
					<Text>Kanji Level {level}</Text>
					<RingProgress
						sections={[{ value: progress, color: color }]}
						label={
							<Text color={color} weight={700} align="center" size="xl">
								{progress}%
							</Text>
						}
					/>
				</div>
			</Card>
		</Link>

  )
}

export default QuizCard
