import { ReactNode } from "react";
import { ContainerView } from "./styles";

const ScreenWithHeaderOffset = ({ children }: { children: ReactNode }) => {
  return <ContainerView>{children}</ContainerView>;
};

export default ScreenWithHeaderOffset;
