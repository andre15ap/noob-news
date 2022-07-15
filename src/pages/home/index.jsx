import { NavBar } from '../../components/navBar';
import { Box } from '../../components/box';
import { Title, Container, Content } from './styles';

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Content>
          <Box height={'200px'}>
            <Title>Home</Title>
          </Box>
        </Content>
      </Container>
    </>
  );
}

export { Home };
