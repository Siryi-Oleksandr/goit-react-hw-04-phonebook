import styled from 'styled-components';

export const Item = styled.li`
  min-width: 380px;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactInfo = styled.div`
  /* min-width: 380px; */
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactName = styled.p`
  display: flex;
  gap: 10px;
  max-width: 245px;
  font-family: 'Segoe UI';
  font-size: 14px;
  font-weight: 600;
`;
export const ContactTel = styled.p`
  display: flex;
  gap: 10px;
  max-width: 245px;
  font-family: 'Segoe UI';
  font-size: 14px;
`;

export const ContactEditInfo = styled.form`
  /* min-width: 380px; */
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ContactEditInput = styled.input`
  border: 1px solid orangered;
  border-radius: 4px;
  outline: 1px solid orangered;
`;

export const ContactEditLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: 'Segoe UI';
  font-size: 12px;
`;
