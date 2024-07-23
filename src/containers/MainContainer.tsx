import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="px-8">{children}</div>;
};

export default MainContainer;
