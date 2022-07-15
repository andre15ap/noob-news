import Proptypes from 'prop-types';
import { BoxStyle } from './styles';

export const Box = ({ children, height, width }) => {
  return (
    <BoxStyle style={{ height: `${height}`, width: `${width}` }}>
      {children}
    </BoxStyle>
  );
};

Box.propTypes = {
  children: Proptypes.string,
  height: Proptypes.string,
  width: Proptypes.string,
};
