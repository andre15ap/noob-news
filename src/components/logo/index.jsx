import PropTypes from 'prop-types';

import logoImg from '../../img/logo.svg';
import darkLogoImg from '../../img/dark-logo.svg';

export const Logo = ({ width, typeLogo }) => {
  if (typeLogo === 'dark') {
    return <img src={darkLogoImg} width={width} />;
  }
  return <img src={logoImg} width={width} />;
};

Logo.propTypes = {
  width: PropTypes.string,
  typeLogo: PropTypes.string,
};
