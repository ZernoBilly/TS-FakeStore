import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  margin-top: ${({ theme }) => theme.spacing.small};

  overflow: hidden;
`;
