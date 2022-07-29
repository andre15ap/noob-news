import PropTypes from 'prop-types';

import { Text } from './styles';

const fonts = ["'Jockey One', sans-serif", "'Roboto', sans-serif"];
const fontWeight = ['lighter', 'normal', 'bold'];

export const CustomText = ({ children, family, weight, size }) => {
  return (
    <Text family={fonts[family]} weight={fontWeight[weight]} size={size + 'px'}>
      {children}
    </Text>
  );
};

CustomText.propTypes = {
  children: PropTypes.string,
  family: PropTypes.string,
  weight: PropTypes.string,
  size: PropTypes.string,
};
