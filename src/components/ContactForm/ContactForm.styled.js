import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import ReactInputMask from 'react-input-mask';

export const FormStyle = styled(Form)`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Span = styled.span`
  font-size: 20px;
  font-weight: 500;

  color: #3a7999;
  margin-bottom: 10px;
`;

export const Input = styled(Field)`
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  font-size: 20px;

  ::placeholder {
    font-size: 14px;
    font-style: italic;
  }
`;

export const InputMaskWrapper = styled(ReactInputMask)`
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  font-size: 20px;

  ::placeholder {
    font-size: 14px;
    font-style: italic;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  margin-bottom: 5px;
`;
// export const Hr = styled.div`
//   border: 0;
//   height: 2px;
//   background-color: #3a7999;
//   width: 600px;
//   text-align: center;
//   margin-top: 20px;
//   margin-bottom: 50px;
//   margin-left: -50px;
// `;
