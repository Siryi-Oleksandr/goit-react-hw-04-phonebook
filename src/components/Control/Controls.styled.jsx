import styled from 'styled-components';

export const Button = styled.button`
  /* margin-left: auto; */
  padding: 5px;
  width: 60px;
  height: 30px;
  border: 1px solid #1664e2;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
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

export const ControlWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;
