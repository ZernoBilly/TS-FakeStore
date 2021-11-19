import styled from "styled-components";
import theme from "../../theme/theme";

type PriceTagProps = {
  fontSize?: "small" | "medium";
};

export const PriceTagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

export const Price = styled.p<PriceTagProps>`
  color: ${({ theme }) => theme.palette.highlight.dark};
  font-weight: 600;
  margin-right: 1rem;
  font-size: ${({ theme, fontSize }) =>
    fontSize === "small" ? theme.fontSize.small : theme.fontSize.medium};
  margin: ${({ theme }) => theme.spacing.verySmall};
`;

export const DiscountedPrice = styled.p`
  color: ${({ theme }) => theme.palette.dark.light};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-decoration: line-through;
  margin: ${({ theme }) => theme.spacing.verySmall};
`;
