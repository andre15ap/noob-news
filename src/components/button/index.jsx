import PropTypes from 'prop-types';

import { Button } from './styles';

export const CustomButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.object,
};
