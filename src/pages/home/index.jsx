import { NavBar } from '../../components/navBar';
import { CustomBox as Box } from '../../components/box';
import { Title, Container, Main, Aside } from './styles';

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Box height={'300px'} width={'100%'}>
          <Title>Header</Title>
        </Box>
      </Container>
      <Container>
        <Main>
          <Box height={'200px'}>
            <Title>Home</Title>
          </Box>
          <Box height={'200px'}>
            <Title>publicação</Title>
          </Box>
        </Main>
        <Aside>
          <Box height={'200px'}>
            <Title>Ultimas noticias</Title>
          </Box>
        </Aside>
      </Container>
    </>
  );
}

export { Home };
