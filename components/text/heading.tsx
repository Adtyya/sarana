import React, { JSX } from "react";
import clsx from "clsx";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  className?: string;
  children: React.ReactNode;
}

const headingStyles: Record<HeadingLevel, string> = {
  1: "text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight",
  2: "text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight",
  3: "text-2xl lg:text-3xl xl:text-4xl font-semibold",
  4: "text-xl font-medium",
  5: "text-lg font-medium",
  6: "text-base font-medium uppercase",
};

export const Heading: React.FC<HeadingProps> = ({
  level,
  className,
  children,
  ...rest
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyle = headingStyles[level];

  return React.createElement(
    Tag,
    { className: clsx(baseStyle, className), ...rest },
    children
  );
};
