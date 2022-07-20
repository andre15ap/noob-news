import PropTypes from 'prop-types';

import logoImg from '../../img/logo.svg';
import darkLogoImg from '../../img/dark-logo.svg';
import { Link } from 'react-router-dom';

export const Logo = ({ width, typeLogo }) => {
  if (typeLogo === 'dark') {
    return (
      <Link to='/'>
        <img src={darkLogoImg} width={width} />
      </Link>
    );
  }
  return <img src={logoImg} width={width} />;
};

Logo.propTypes = {
  width: PropTypes.string,
  typeLogo: PropTypes.string,
};
