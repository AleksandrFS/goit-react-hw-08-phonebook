import styled from '@emotion/styled';
import { Field } from 'formik';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  border: 3px solid #f7b603c5;
  border-radius: 10px;
  background-color: #ffffff13;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 0px 100px;
`;

export const InputTitle = styled.label`
  width: 150px;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;

export const Input = styled(Field)`
  width: 500px;
  font-size: 20px;
  border-radius: 10px;
  outline: none;
  border: 2px solid #fff;

  &:focus {
    border: 2px solid #f7b603c5;
  }
`;

export const BtnWrap = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 10px;
  border-color: #fff;
  color: #fff;
  background-color: #f7b603c5;
  border: none;

  font-size: 16px;
  font-weight: 600;
  transition: transform 0.15s 0.1s ease;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;
