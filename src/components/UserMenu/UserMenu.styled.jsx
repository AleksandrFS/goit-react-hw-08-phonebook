import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const UserTitle = styled.p`
  margin: 0;
  font-size: 24px;
  color: #fff;
`;

export const LogOutBtn = styled.button`
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
