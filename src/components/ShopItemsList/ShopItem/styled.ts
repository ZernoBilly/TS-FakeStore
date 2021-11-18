import styled from "styled-components";

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20rem;
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
`;

export const ItemTitle = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.medium};

  h5 {
  }
`;

export const PriceTag = styled.p`
  color: ${({ theme }) => theme.palette.highlight.dark};
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  height: 10rem;
  width: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: none;
  }
`;
