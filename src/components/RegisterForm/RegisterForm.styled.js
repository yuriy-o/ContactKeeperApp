import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;
export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 700;

  color: #3a7999;
  margin-bottom: 25px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 20px;
`;
export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;

  color: #3a7999;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  margin-bottom: 10px;
  width: 300px;
  height: 30px;
  font-size: 20px;

  ::placeholder {
    font-size: 14px;
    font-style: italic;
  }
`;
