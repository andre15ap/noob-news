import PropTypes from 'prop-types';

import { Input } from './styles';

export const CustomInput = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} />;
};

CustomInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
