import { ScrollArea } from '@mantine/core'
import QuizCard from '../components/QuizCard'
import QuizPage from '../components/QuizCard'

const QuizesPage = () => {

	const Quizzes = [
		{color: '#68b5e8', progress: 90, level: 1, id: 1},
		{color: '#68b5e8', progress: 80, level: 2, id: 2},
		{color: '#68b5e8', progress: 20, level: 3, id: 3},
		{color: '#68b5e8', progress: 50, level: 4, id: 4},
		{color: '#68b5e8', progress: 100, level: 5, id: 5},
	]


	return(
		<>
			{Quizzes.map((level)=> <QuizCard key={level.id} link={`/quiz/${level.level}`} level={String(level.level)} color={level.color} progress={level.progress}/>)}
		</>
	)
}

export default QuizesPage
