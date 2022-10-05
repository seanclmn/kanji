import { ScrollArea } from '@mantine/core'
import QuizCard from '../components/QuizCard'
import QuizPage from '../components/QuizCard'

import { useSelector } from 'react-redux';
import { getUserData, changeScore } from '../features/kanji/kanjiSlice';
import { useAppDispatch } from '../app/hooks';

const QuizesPage = () => {
	const dataStore = useSelector(getUserData)
	const Quizzes = dataStore.userData.userData.kanjiTopScores.map((score,kanjiLevel)=>({color: "#dedede60", progress: score, level: kanjiLevel+1 , id: kanjiLevel+1}))

	return(
		<div className="pt-5">
			{Quizzes.map((level)=> <QuizCard key={level.id} link={`/home/quiz/${level.level}`} level={String(level.level)} color={level.color} progress={level.progress}/>)}
		</div>
	)
}

export default QuizesPage
