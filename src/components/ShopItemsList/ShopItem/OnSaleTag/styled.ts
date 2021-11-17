import styled from "styled-components";

export const SaleTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 6rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.palette.highlight.main};
  transform: rotate(45deg);

  top: 1.2rem;
  right: -1.2rem;

  p {
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.light};
    text-shadow: 5px black;
  }
`;
