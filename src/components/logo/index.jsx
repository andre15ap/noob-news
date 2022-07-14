import PropTypes from 'prop-types';
import logoImg from '../../img/logo.svg';
import { Image } from './styles';

export const Logo = ({ width }) => {
  return <Image src={logoImg} width={width} />;
};

Logo.propTypes = {
  width: PropTypes.string,
};
