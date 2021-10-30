import { ReactNode } from "react";

export type WrapperProps = {
  justifyContent:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  children?: ReactNode;
};
