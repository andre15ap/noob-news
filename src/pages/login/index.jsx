import { BiUserCircle as UserIcon } from 'react-icons/bi';
import { RiLockPasswordLine as PasswordIcon } from 'react-icons/ri';

import { CustomButton as Button } from '../../components/button';
import { CustomInput as Input } from '../../components/input';
import { Logo } from '../../components/logo';
import { CustomText as Text } from '../../components/text';
import { Container, ContentForm, ContentInput, InputIcon } from './styles';

function Login() {
  return (
    <Container>
      <ContentForm>
        <Logo width={'150'} />
        <ContentInput>
          <InputIcon>
            <UserIcon size={'30px'} color={'black'} />
          </InputIcon>
          <Input placeholder={'Digite seu login'} />
        </ContentInput>
        <ContentInput>
          <InputIcon>
            <PasswordIcon size={'30px'} color={'black'} />
          </InputIcon>
          <Input placeholder={'Digite sua senha'} type='password' />
        </ContentInput>
        <Button>
          <Text family={0} weight={2} size={20}>
            Login
          </Text>
        </Button>
      </ContentForm>
    </Container>
  );
}

export { Login };
