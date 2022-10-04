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
				className='mb-4 flex flex-row justify-left px-5 py-0 h-[200px]'
				>
				<div
					className="w-[150px] text-center"
					>
					<Text>	
					GRADE {level}
					</Text>
					<img className="h-[100%] "src={process.env.PUBLIC_URL+`/grade_${level}.png`} alt={`/grade_${level}.png`} />
				</div>
				<div className="flex flex-col items-center w-[150px]">
					<Text>HIGH SCORE</Text>
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
