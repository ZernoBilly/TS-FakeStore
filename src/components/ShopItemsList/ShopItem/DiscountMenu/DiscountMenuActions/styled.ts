import styled from "styled-components";

export const ActionsConstainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  p {
    margin: 0 0.5rem 0 0.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
