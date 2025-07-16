import React, { JSX } from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="w-full px-6 lg:max-w-5xl xl:max-w-7xl mx-auto my-3.5">
      {children}
    </div>
  );
}
