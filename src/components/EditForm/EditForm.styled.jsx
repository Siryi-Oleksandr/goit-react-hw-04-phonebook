import styled from 'styled-components';
import { Form, Field } from 'formik';

export const EditFormStyled = styled(Form)`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const EditFormLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Segoe UI';
  font-size: 12px;
`;
export const EditInput = styled(Field)`
  width: 180px;
  border: 1px solid #1664e2;
  border-radius: 4px;
  outline: 1px solid #1664e2;
`;

export const EditFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CustomError = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  padding: 3px;
  width: 110px;
  border: 1px solid red;
  border-radius: 4px;
  color: red;
  font-size: 8px;
`;
