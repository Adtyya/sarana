import React from "react";
import clsx from "clsx";

type Variant = "sunflower" | "midnight" | "golden" | "peach" | "white";
type IconPosition = "left" | "right";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  sunflower: "bg-sunflower text-midnight hover:bg-yellow-300",
  midnight: "bg-midnight text-white hover:bg-purple-900",
  golden: "bg-golden text-midnight hover:bg-yellow-500",
  peach: "bg-peach text-midnight hover:bg-yellow-200",
  white: "bg-white text-midnight hover:bg-sunflower",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "sunflower",
  icon,
  iconPosition = "left",
  className,
  children,
  ...rest
}) => {
  const baseClasses =
    "inline-flex items-center gap-2 px-7 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  const variantClass = variantClasses[variant];

  return (
    <button className={clsx(baseClasses, variantClass, className)} {...rest}>
      {icon && iconPosition === "left" && (
        <span className="w-5 h-5">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="w-5 h-5">{icon}</span>
      )}
    </button>
  );
};
