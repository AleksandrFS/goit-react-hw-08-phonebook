import styled from '@emotion/styled';

export const FormWrap = styled.form`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 15px 10px;
  display: flex;
  flex-direction: row;
  gap: 26px;
  align-items: center;
  justify-content: space-around;
  border: 3px solid #f7b603c5;
  border-radius: 10px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const InputTitle = styled.label`
  font-size: 26px;
  font-weight: 500;
  color: #fff;
`;

export const Input = styled.input`
  width: 200px;
  border: 2px solid #fff;
  border-radius: 10px;
  font-size: 20px;
  outline: none;

  &:focus {
    border: 2px solid #f7b603c5;
  }
`;

export const AddBtn = styled.button`
  width: 110px;
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
