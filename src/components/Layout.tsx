import { type FunctionComponent, type PropsWithChildren } from "react";

export type LayoutProps = PropsWithChildren<{}>;

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex bg-amber-400 justify-center font-mono">
      {children}
    </div>
  );
};
