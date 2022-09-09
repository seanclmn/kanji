import { createStyles, Text, Card, RingProgress, Group } from '@mantine/core';
import { Outlet } from 'react-router';


const QuizPage = () =>{

  return(
    <div className="w-[100%] h-[95vh] bg-white pt-5">
      <Outlet/>
    </div>

    )
}

export default QuizPage
