import { useState } from 'react'
import { Title, AppShell, Navbar, Header, ScrollArea } from '@mantine/core';
import { Link, Outlet } from 'react-router-dom'
import QuizCard from '../components/QuizCard'
import QuizzesPage from './QuizzesPage'
import NavbarSection from '../components/NavbarSection'
import LandingPage from './LandingPage';



const Home = () =>{

  const [opened, setOpened] = useState(false);

  return (
      <AppShell
        navbarOffsetBreakpoint="sm" 

        className="h-[100vh] p-0"
        fixed
        navbar={
          <Navbar
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 250, lg: 250 }}
            height="100vh"
            >        
            <div 
              className='py-5 pl-4'
              >
              <Link
              to="/"
              className="no-underline text-black"
              >
                <Title>Kanji</Title>
              </Link>
            </div>
            <Navbar.Section >
              <NavbarSection title={"Quiz"} link="/home/quizzes"/>
              <NavbarSection title={"Lookup"} link="/home/dictionary"/>
            </Navbar.Section>

          </Navbar>
        }

        styles={(theme) => ({
          main: { backgroundColor: theme.colors.gray[0] },
        })}
      >
          <Outlet  />
			</AppShell>
    );

}

export default Home
