import clsx from "clsx";
import { forwardRef } from "react";

export interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  (
    {
      children,
      className = "",
      ...props
    }: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "text-[13px] underline text-royal-purple",
          className,
          "hover:text-royal-purple focus:outline-none focus-visible:outline-none transition-all"
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
LinkButton.displayName = "Button";

export default LinkButton;
