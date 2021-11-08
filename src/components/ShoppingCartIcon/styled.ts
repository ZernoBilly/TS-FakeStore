import styled from "styled-components";

export const ShoppingCartIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.palette.highlight.light};
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-top: ${({ theme }) => theme.spacing.small};

  p {
    color: ${({ theme }) => theme.palette.secondary.dark};
    font-size: 1.2rem;
    font-weight: 550;
  }
`;
