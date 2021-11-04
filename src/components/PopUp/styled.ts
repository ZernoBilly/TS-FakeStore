import styled from "styled-components";

type PopUpContainerProps = {
  visibility: string;
};

export const PopUpContainer = styled.div<PopUpContainerProps>`
  position: fixed;
  width: 5rem;
  height: 2rem;
  background-color: gray;
  bottom: 1rem;
  left: 1rem;
  visibility: ${(props) => props.visibility};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpText = styled.p`
  position: relative;
`;
