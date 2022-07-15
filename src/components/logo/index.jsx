import PropTypes from 'prop-types';
import logoImg from '../../img/logo.svg';
import darkLogoImg from '../../img/dark-logo.svg';
import { Image } from './styles';

export const Logo = ({ width, typeLogo }) => {
  if (typeLogo === 'dark') {
    return <Image src={darkLogoImg} width={width} />;
  }
  return <Image src={logoImg} width={width} />;
};

Logo.propTypes = {
  width: PropTypes.string,
  typeLogo: PropTypes.string,
};
