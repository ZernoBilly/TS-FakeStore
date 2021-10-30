import React, { ReactNode } from "react";

import { StyledFlexWrapper } from "./styled";

import { WrapperProps } from "./types";

const FlexWrapper = (props: WrapperProps) => {
  return (
    <StyledFlexWrapper
      justifyContent={props.justifyContent}
    ></StyledFlexWrapper>
  );
};

export default FlexWrapper;
