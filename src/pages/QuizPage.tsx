import {Layout} from 'antd'
const { Header, Footer, Sider, Content } = Layout;


const QuizPage = () =>{
  return(

      <Layout>
      <Header>header</Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
      </Layout>)

}

export default QuizPage
