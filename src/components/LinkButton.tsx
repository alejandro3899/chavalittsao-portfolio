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
          "text-[14.33px] underline text-royal-purple",
          className,
          "hover:text-royal-purple outline-dashed outline-transparent outline-1 focus-visible:outline-royal-purple transition-all"
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
