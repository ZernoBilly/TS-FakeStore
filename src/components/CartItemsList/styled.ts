import styled from "styled-components";

export const CartListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 30%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 3rem;
  height: 100%;
`;
export const StickyContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding-right: 3rem;
  padding-left: 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  min-width: 30%;

  @media ${({ theme }) => theme.mediaQueries.md} {
    padding-right: 1rem;
  }
  @media ${({ theme }) => theme.mediaQueries.sm} {
    position: relative;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
