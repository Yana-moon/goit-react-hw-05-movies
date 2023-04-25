import styled from 'styled-components';

export const WrapperForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 20px;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  ::placeholder {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 37px;
  padding: 5px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 4px;
  background-color: #c7d0d9;
`;