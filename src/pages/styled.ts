import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.backGroundColor.main};
`;
