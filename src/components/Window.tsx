import { type FunctionComponent, type PropsWithChildren } from "react";

export type WindowProps = PropsWithChildren<{ className?: string }>;

export const Window: FunctionComponent<WindowProps> = ({
  children,
  className,
}) => {
  return (
    <div className="flex flex-col justify-center">
      <div
        className={`border-2 border-black rounded-xl bg-gray-200 custom-shadow ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
