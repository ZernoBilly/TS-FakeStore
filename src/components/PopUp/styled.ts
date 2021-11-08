import styled from "styled-components";

type PopUpContainerProps = {
  visibility: string;
  backgroundColor: string;
};

export const PopUpContainer = styled.div<PopUpContainerProps>`
  position: fixed;

  background-color: ${(props) =>
    props.backgroundColor === "add" ? props.theme.palette.primary.light : ""};
  top: 1rem;
  right: 35%;
  visibility: ${(props) => props.visibility};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpText = styled.p`
  position: relative;
`;
