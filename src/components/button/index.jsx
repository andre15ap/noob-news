import * as C from './styles';

// eslint-disable-next-line react/prop-types
const Button = ({ Text, onClick }) => {
  return <C.Button onClick={onClick}>{Text}</C.Button>;
};
export default Button;
