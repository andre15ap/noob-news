import styled from 'styled-components';

export const Text = styled.text`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  font-family: ${props => props.family};
`;
