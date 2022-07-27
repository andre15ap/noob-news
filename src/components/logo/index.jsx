import PropTypes from 'prop-types';

import logoImg from '../../img/logo.svg';
import darkLogoImg from '../../img/dark-logo.svg';

export const Logo = ({ width, typeLogo }) => {
  return (
    <img
      src={typeLogo === 'dark' ? darkLogoImg : logoImg}
      width={width + 'px'}
    />
  );
};

Logo.propTypes = {
  width: PropTypes.string,
  typeLogo: PropTypes.string,
};
