import PropTypes from 'prop-types';
import { ButtonStyle } from './styles';

export const Button = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.object,
};
