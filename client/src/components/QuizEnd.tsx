import {Card,Title} from '@mantine/core' 


export interface QuizProps {
	quizScore: number
}

const Quiz = ({quizScore}:QuizProps) => {
	return(
		<div>
			<Card>
				<Card.Section className="text-center">
					<Title>Your Score: {quizScore*100}%</Title>
				</Card.Section>
			</Card>
		</div>

	)

}

export default Quiz
