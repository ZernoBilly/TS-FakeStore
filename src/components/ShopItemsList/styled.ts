import styled from "styled-components";

export const ItemListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 1 70%;
  margin-top: 3rem;
  box-shadow: ${({ theme }) => theme.boxShadow.main};
`;
