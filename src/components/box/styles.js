import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  background: #222222;
  border-radius: 10px;
  border-bottom: 2px solid #f26c0b;
  padding: 10px;
  margin-top: 10px;
  width: ${props => props.width};
  height: ${props => props.height};
`;
