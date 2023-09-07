import clsx from "clsx";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={clsx(
          "flex items-center justify-center bg-base-purple text-white leading-tight -tracking-[0.24px] text-neutral uppercase outline-none px-8 py-4 transition-all",
          "focus:outline-none focus-visible:outline-none hover:bg-base-purple/90 disabled:bg-base-purple/50 disabled:hover:bg-base-purple/50 disabled:cursor-default",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
PrimaryButton.displayName = "Button";

export default PrimaryButton;
