import PropTypes from 'prop-types';

import { Button } from './styles';

export const CustomButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
