import styled from "styled-components";

type DiscountMenuStyledProps = {
  menuActive: boolean;
};

export const DiscountMenuContainer = styled.div<DiscountMenuStyledProps>`
  background-color: white;
`;

export const DiscountMenuButton = styled.div`
  height: 1rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 1rem;
    width: 2.5rem;
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: ${({ theme }) => theme.palette.highlight.main};
    border-color: ${({ theme }) => theme.palette.highlight.main};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
