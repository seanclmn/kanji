import { Text, Card, RingProgress, Title } from '@mantine/core';
import { Link } from 'react-router-dom'


interface QuizCardProps {
	level: string
  progress: number
	color: string
	link: string
}

const colorMap = [
	"bg-gradient-to-r from-blue-500 to-cyan-300",
	"bg-gradient-to-r from-indigo-500 to-pink-300",
	"bg-gradient-to-r from-red-500 to-rose-300",
	"bg-gradient-to-r from-cyan-500 to-blue-300",
	"bg-gradient-to-r from-lime-500 to-green-200",
	"bg-gradient-to-r from-orange-600 to-rose-200",
	"bg-rose-200","bg-rose-200","bg-rose-200","bg-pink-300"]

const QuizCard = ({level, progress, color, link}: QuizCardProps) =>{

  return(
		<Link to={link} rel="prefetch" className='no-underline'>
			<Card 
				withBorder 
				p="none" 
				radius="md"
				className='mx-auto mb-4 flex flex-row pl-0 pr-0 h-[200px] justify-between max-w-[1000px]'
				>
				<div className={"flex flex-row justify-around w-[50%] items-center py-5 "+colorMap[eval(level)-1]}>
					<p className='bg-transparent text-[120px] leading-none my-0 text-white bottom-0'>
						L{level}
					</p>

					<Card className='flex flex-col items-center bg-transparent'>
						<Text size="lg" color="white">HIGH SCORE</Text>
						<RingProgress
							sections={[{ value: progress, color: "white" },{ value: 100-progress, color: color }]}
							label={
								<Text color="white" weight={700} align="center" size="xl">
									{progress}%
								</Text>
							}
						/>

					</Card>
				</div>
				<img 
					className="
						w-[50%] 
						h-[100%] 
						object-cover
						"
					src={process.env.PUBLIC_URL+`/grade_${level}.png`} 
					alt={`/grade_${level}.png`} 
					/>
			</Card>
		</Link>

  )
}

export default QuizCard
