import styled from "styled-components";

export const CartListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 30%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
`;
export const StickyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding-right: 6rem;

  @media ${({ theme }) => theme.mediaQueries.md} {
    padding-right: 0.5rem;
  }
  @media ${({ theme }) => theme.mediaQueries.sm} {
    position: relative;
    align-items: flex-start;
    padding-right: 0.5rem;
  }
`;
