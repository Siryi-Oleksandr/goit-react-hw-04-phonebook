import styled from 'styled-components';

export const FormStyled = styled.form`
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-family: 'Segoe UI';
  font-size: 18px;
  border: 1px solid #1664e2;
  border-radius: 8px;
`;

export const FormLabel = styled.label`
  position: relative;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-family: 'Segoe UI';
  font-size: 18px;
`;
export const Input = styled.input`
  padding: 5px;
  width: 250px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;

  transition: border 250ms linear;

  &:hover,
  &:focus {
    border: 2px solid #1664e2;
  }
`;

export const Button = styled.button`
  padding: 5px;
  width: 200px;
  border: 1px solid #1664e2;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: rgba(22, 100, 226, 0.24) 0px 3px 8px;
    background-color: rgba(22, 144, 226, 0.737);
    border-color: transparent;
    color: #fff;
  }
`;

export const CustomError = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 3px;
  width: 160px;
  border: 1px solid red;
  border-radius: 4px;
  color: red;
  font-size: 12px;
`;
