import { Title, AppShell, Navbar, Header } from '@mantine/core';
import QuizCard from '../components/QuizCard'
import NavbarSection from '../components/NavbarSection'

const Home = () =>{

  return (
      <AppShell
        navbar={
          <Navbar width={{ base: 300 }} height={500}>
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
            <Title>Kanji</Title>
          </Header>
        }

        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <QuizCard progress={90}/>

        <div className="w-[100px] h-[100px] bg-gray-200"><p>hello</p></div>
      </AppShell>
    );

}

export default Home
