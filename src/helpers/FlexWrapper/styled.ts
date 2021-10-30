import styled from "styled-components";

type WrapperProps = {
  justifyContent:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

export const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: ${(props: WrapperProps) => props.justifyContent};
`;
