import Proptypes from 'prop-types';

import { Box } from './styles';

export const CustomBox = ({ children, height, width }) => {
  return (
    <Box width={width + 'px'} height={height + 'px'}>
      {children}
    </Box>
  );
};

CustomBox.propTypes = {
  children: Proptypes.string,
  height: Proptypes.string,
  width: Proptypes.string,
};
