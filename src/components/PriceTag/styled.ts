import styled from "styled-components";

export const PriceTagContainer = styled.div`
  background-color: red;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.palette.highlight.dark};
  font-weight: 600;
`;

export const DiscountedPrice = styled.p`
  color: ${({ theme }) => theme.palette.highlight.dark};
  font-weight: 600;
`;
