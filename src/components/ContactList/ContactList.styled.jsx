import styled from '@emotion/styled';

export const ContactWrap = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export const List = styled.li`
  list-style: none;
`;

export const ContactFrame = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  border: 3px solid #f7b603c5;
  border-radius: 10px;
`;

export const ContactCard = styled.div`
  margin-top: 30px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactValues = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

export const DelBtn = styled.button`
  position: absolute;
  z-index: 101;
  top: 8px;
  right: 8px;
  padding: 0;
  display: block;
  align-items: center;
  background: none;
  border: none;
  outline: none;

  color: #fff;

  transition: transform 0.15s 0.1s ease;

  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.05);
    color: #f7b603c5;
  }
`;
