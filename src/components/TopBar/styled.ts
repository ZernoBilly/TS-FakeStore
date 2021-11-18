import styled from "styled-components";

export const TopBarConstainer = styled.div`
  height: 3rem;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.dark.main};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;

  @media ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-end;
  }
`;
