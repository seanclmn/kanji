import { Title, AppShell, Navbar, Header } from '@mantine/core';
import { Link } from 'react-router-dom'
import QuizCard from '../components/QuizCard'
import QuizesPage from '../pages/QuizesPage'
import NavbarSection from '../components/NavbarSection'

const Home = () =>{

  return (
      <AppShell
        className="h-screen"
        navbar={
          <Navbar
            width={{ base: 300 }}
            height="100vh"
            >
            <Navbar.Section className="cursor-pointer hover:bg-gray-200">
              <NavbarSection title={"Quiz"} link="/quiz"/>
            </Navbar.Section>

            <Navbar.Section className="cursor-pointer hover:bg-gray-200">
              <NavbarSection title={"Quiz"} link="/quiz"/>
            </Navbar.Section>

            <Navbar.Section className="cursor-pointer hover:bg-gray-200">
              <NavbarSection title={"Quiz"} link="/quiz"/>
            </Navbar.Section>

          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            <Link
              to="/"
              className="no-underline text-black"
              >
              <Title>Kanji</Title>
            </Link>
          </Header>
        }

        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
  	    
			</AppShell>
    );

}

export default Home
