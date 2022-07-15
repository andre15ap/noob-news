import { Logo } from '../logo';
import { Nav } from './styles';

export const NavBar = () => {
  return (
    <Nav>
      <div>
        <Logo width={'55px'} typeLogo={'dark'} />
      </div>
    </Nav>
  );
};
