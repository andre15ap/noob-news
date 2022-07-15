import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContentForm = styled.form`
  width: 100%;
  max-width: 450px;
  height: 400px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 1s;

  @media (max-width: 500px) {
    padding: 20px;
  }
`;
export const ContentInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #d9d9d9;
  border-radius: 10px;
`;
export const InputIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
