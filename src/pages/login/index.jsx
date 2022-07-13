import * as C from './styles';
import Button from '../../components/button';
import Input from '../../components/input';
import Logo from '../../components/logo';
import logoImg from '../../img/logo.png';
import { BiUserCircle } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';

function Login() {
  return (
    <C.Container>
      <C.Content>
        <Logo src={logoImg} />
        <C.InputFildUser>
          <C.InputIcon>
            <BiUserCircle size={'2em'} />
          </C.InputIcon>
          <Input placeholder={'Digite seu login'} />
        </C.InputFildUser>
        <C.InputFildUser>
          <C.InputIcon>
            <RiLockPasswordLine size={'2em'} />
          </C.InputIcon>
          <Input placeholder={'Digite sua senha'} type='password' />
        </C.InputFildUser>
        <Button Text={'Login'} />
      </C.Content>
    </C.Container>
  );
}

export { Login };
