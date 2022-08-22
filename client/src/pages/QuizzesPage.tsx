import { ScrollArea } from '@mantine/core'
import QuizCard from '../components/QuizCard'
import QuizPage from '../components/QuizCard'

import { useSelector } from 'react-redux';
import { getUserData, changeScore } from '../features/kanji/kanjiSlice';
import { useAppDispatch } from '../app/hooks';

const QuizesPage = () => {
	const dataStore = useSelector(getUserData)
	const Quizzes = dataStore.userData.userData.kanjiTopScores.map((score,kanjiLevel)=>({color: '#68b5e8', progress: score, level: kanjiLevel+1 , id: kanjiLevel+1}))

	return(
		<>
			{Quizzes.map((level)=> <QuizCard key={level.id} link={`/quiz/${level.level}`} level={String(level.level)} color={level.color} progress={level.progress}/>)}
		</>
	)
}

export default QuizesPage
