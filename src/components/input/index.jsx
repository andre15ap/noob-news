import PropTypes from 'prop-types';
import { InputStyle } from './styles';

export const Input = ({ type, placeholder }) => {
  return <InputStyle type={type} placeholder={placeholder}></InputStyle>;
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
