import React from "react";
import clsx from "clsx";

type ParagraphSize = "sm" | "base" | "lg" | "xl";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  className?: string;
  children?: React.ReactNode;
  html?: string; // new prop
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
  html,
  ...rest
}) => {
  return (
    <p
      className={clsx(paragraphStyles[size], "text-black", className)}
      {...rest}
      {...(html ? { dangerouslySetInnerHTML: { __html: html } } : {})}
    >
      {!html && children}
    </p>
  );
};
