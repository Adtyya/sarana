import React from "react";
import clsx from "clsx";

type ParagraphSize = "sm" | "base" | "lg" | "xl";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  className?: string;
  children: React.ReactNode;
}

const paragraphStyles: Record<ParagraphSize, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export const Paragraph: React.FC<ParagraphProps> = ({
  size = "base",
  className,
  children,
  ...rest
}) => {
  return (
    <p
      className={clsx(paragraphStyles[size], "text-gray-700", className)}
      {...rest}
    >
      {children}
    </p>
  );
};
