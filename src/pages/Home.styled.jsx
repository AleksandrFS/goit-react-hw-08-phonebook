import styled from "@emotion/styled";


export const HomeWrap = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 20px;
  text-align: center;
  border: 3px solid #f7b603c5;
  border-radius: 10px;
  background-color: #ffffff13;
  /* box-shadow: 3px 3px 6px rgba(243, 207, 130, 0.08),
    3px 3px 6px rgba(243, 207, 130, 0.08), 3px 2px 6px rgba(243, 207, 130, 0.08); */
`;

export const HomeTitle = styled('h1')`
    font-size: 36px;
    color: #fff;
`

export const HomeDescription = styled('p')`
  font-size: 26px;
  line-height: 1.5;
  color: #fff;
`;