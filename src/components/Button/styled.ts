import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.1rem;
  background-color: ${(props) =>
    props.color === "add"
      ? ({ theme }) => theme.palette.primary.main
      : ({ theme }) => theme.palette.highlight.light};
  margin: 1rem;

  p {
    margin: 0.2rem;
    padding: 0;
    color: black;
    font-weight: 500;
  }
`;
