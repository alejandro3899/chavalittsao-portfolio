import clsx from "clsx";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "base" | "primary";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, theme = "base", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "flex items-center justify-center",
          {
            "bg-base-purple text-neutral": theme === "primary",
            "bg-black text-white": theme === "base",
          },
          "leading-tight -tracking-[0.24px] uppercase outline-none",
          {
            "px-4 py-4": size === "sm",
            "px-8 py-4": size === "md",
            "px-8 py-6": size === "lg",
          },
          "transition-all focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed",
          {
            "hover:bg-base-purple/90 disabled:bg-base-purple/50 disabled:hover:bg-base-purple/50":
              theme === "primary",
            "hover:bg-black/90 disabled:bg-black/50 disabled:hover:bg-black/50":
              theme === "base",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
