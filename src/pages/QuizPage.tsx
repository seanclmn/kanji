import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';
import { Outlet } from 'react-router';


const QuizPage = () =>{

  return(
    <div className="w-[100%] h-[100%] bg-white">
			<div>
        <Outlet/>
      </div>
    </div>

    )
}

export default QuizPage
