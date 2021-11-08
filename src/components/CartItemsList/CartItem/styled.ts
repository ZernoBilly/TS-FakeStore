import styled from "styled-components";
import theme from "../../../theme/theme";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.optional.light};
  margin-top: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  min-width: 40rem;

  @media ${({ theme }) => theme.mediaQueries.md} {
    min-width: 11rem;
  }
`;

export const ItemTitle = styled.h4`
  padding: 0 1rem 0 1rem;
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const PriceTag = styled.p`
  padding: 0 1rem 0 1rem;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-weight: 600;
`;

export const PiecesTag = styled.p`
  padding: 0 1rem 0 1rem;
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-weight: 600;
`;
