import { NavBar } from '../../components/navBar';
import { CustomBox as Box } from '../../components/box';
import { PostComponent as Post } from '../../components/post';
import { Main } from './styles';

function Home() {
  return (
    <>
      <NavBar />
      <Main>
        <Box width={'350px'}>
          <Post
            img={
              'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_ageofultron_movie_poster_5705ee77.jpeg?region=2,104,538,458'
            }
            tag={'Marvel'}
            titulo={'Novo Filme Vingadores'}
            conteudo={
              'será lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filme'
            }
          />
        </Box>
        <Box width={'350px'}>
          <Post
            img={
              'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_ageofultron_movie_poster_5705ee77.jpeg?region=2,104,538,458'
            }
            tag={'Marvel'}
            titulo={'Novo Filme Vingadores'}
            conteudo={
              'será lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filme'
            }
          />
        </Box>
        <Box width={'350px'}>
          <Post
            img={
              'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_ageofultron_movie_poster_5705ee77.jpeg?region=2,104,538,458'
            }
            tag={'Marvel'}
            titulo={'Novo Filme Vingadores'}
            conteudo={
              'será lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filme'
            }
          />
        </Box>
      </Main>
    </>
  );
}

export { Home };
