import { ReactNode } from "react";
import { ContainerView } from "./styles";

const HeaderOffsetView = ({ children }: { children: ReactNode }) => {
  return <ContainerView>{children}</ContainerView>;
};

export default HeaderOffsetView;
