import { NavBar } from '../../components/navBar';
import { CustomBox as Box } from '../../components/box';
import { PostComponent as Post } from '../../components/post';
import { Main } from './styles';

function Home() {
  return (
    <div>
      <NavBar />
      <Main>
        <Box width={300}>
          <Post
            img={
              'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_ageofultron_movie_poster_5705ee77.jpeg?region=2,104,538,458'
            }
            tag={'Marvel'}
            title={'Novo Filme Vingadores 1'}
            date={'21/07/2022'}
            post={
              'será lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filme'
            }
          />
        </Box>
        <Box width={300}>
          <Post
            img={
              'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_ageofultron_movie_poster_5705ee77.jpeg?region=2,104,538,458'
            }
            tag={'Marvel'}
            title={'Novo Filme Vingadores'}
            post={
              'será lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filme'
            }
          />
        </Box>
        <Box width={300}>
          <Post
            img={
              'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_ageofultron_movie_poster_5705ee77.jpeg?region=2,104,538,458'
            }
            tag={'Marvel'}
            title={'Novo Filme Vingadores'}
            post={
              'será lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filme'
            }
          />
        </Box>
        <Box width={'300px'}>
          <Post
            img={
              'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_ageofultron_movie_poster_5705ee77.jpeg?region=2,104,538,458'
            }
            tag={'Marvel'}
            title={'Novo Filme Vingadores 1'}
            date={'21/07/2022'}
            post={
              'será lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filme'
            }
          />
        </Box>
        <Box width={'300px'}>
          <Post
            img={
              'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_ageofultron_movie_poster_5705ee77.jpeg?region=2,104,538,458'
            }
            tag={'Marvel'}
            title={'Novo Filme Vingadores'}
            post={
              'será lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filme'
            }
          />
        </Box>
        <Box width={'300px'}>
          <Post
            img={
              'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_ageofultron_movie_poster_5705ee77.jpeg?region=2,104,538,458'
            }
            tag={'Marvel'}
            title={'Novo Filme Vingadores'}
            post={
              'será lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filmeserá lançado um novo filme'
            }
          />
        </Box>
      </Main>
    </div>
  );
}

export { Home };
