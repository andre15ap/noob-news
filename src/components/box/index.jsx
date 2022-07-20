import Proptypes from 'prop-types';

import { Box } from './styles';

export const CustomBox = ({ children, height, width }) => {
  return (
    <Box style={{ height: `${height}`, width: `${width}` }}>{children}</Box>
  );
};

CustomBox.propTypes = {
  children: Proptypes.string,
  height: Proptypes.string,
  width: Proptypes.string,
};
