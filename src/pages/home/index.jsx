import { NavBar } from '../../components/navBar';
import { Title, Container, Content } from './styles';

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Content>
          <Title>Home</Title>
        </Content>
      </Container>
    </>
  );
}

export { Home };
