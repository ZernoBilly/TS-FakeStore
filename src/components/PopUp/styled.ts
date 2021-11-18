import styled from "styled-components";

type PopUpContainerProps = {
  visibility: string;
  backgroundColor: string;
};

export const PopUpContainer = styled.div<PopUpContainerProps>`
  position: fixed;
  background-color: ${(props) =>
    props.backgroundColor === "add"
      ? props.theme.palette.primary.light
      : props.theme.palette.highlight.main};
  top: 0.5rem;
  left: 0.5rem;
  visibility: ${(props) => props.visibility};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  @media ${({ theme }) => theme.mediaQueries.md} {
  }
`;

export const PopUpText = styled.p`
  position: relative;
  margin: ${({ theme }) => theme.spacing.verySmall};
  padding: ${({ theme }) => theme.spacing.verySmall};
  font-weight: 550;

  @media ${({ theme }) => theme.mediaQueries.md} {
    font-size: 0.8rem;
  }
`;
