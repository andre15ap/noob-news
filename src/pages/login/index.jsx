import { CustomButton as Button } from '../../components/button';
import { Input } from '../../components/input';
import { Logo } from '../../components/logo';
import { BiUserCircle } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Container, ContentForm, ContentInput, InputIcon } from './styles';

function Login() {
  return (
    <Container>
      <ContentForm>
        <Logo width={'150px'} />
        <ContentInput>
          <InputIcon>
            <BiUserCircle size={'2em'} color={'black'} />
          </InputIcon>
          <Input placeholder={'Digite seu login'} />
        </ContentInput>
        <ContentInput>
          <InputIcon>
            <RiLockPasswordLine size={'2em'} color={'black'} />
          </InputIcon>
          <Input placeholder={'Digite sua senha'} type='password' />
        </ContentInput>
        <Button text={'Login'} />
      </ContentForm>
    </Container>
  );
}

export { Login };
