import styled from "styled-components";
import theme from "../../theme/theme";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0.1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin: 1rem;

  p {
    margin: 0.2rem;
    padding: 0;
    color: black;
    font-weight: 500;
  }
`;
