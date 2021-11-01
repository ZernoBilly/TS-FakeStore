import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 30rem;
`;

export const ItemTitle = styled.div`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
`;
