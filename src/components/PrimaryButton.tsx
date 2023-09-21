import clsx from "clsx";
import { forwardRef } from "react";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "flex items-center justify-center bg-base-purple leading-tight -tracking-[0.24px] text-neutral uppercase outline-none px-8 py-4 transition-all",
          "focus:outline-none focus-visible:outline-none hover:bg-base-purple/90 disabled:bg-base-purple/50 disabled:hover:bg-base-purple/50 disabled:cursor-default",
          className
        )}
        {...props}
      />
    );
  }
);
PrimaryButton.displayName = "Button";

export default PrimaryButton;
