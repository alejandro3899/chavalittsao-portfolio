import clsx from "clsx";
import Link, { LinkProps } from "next/link";

export default function LinkButton({
  children,
  className = "",
  target = "_blank",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  target?: string;
} & LinkProps) {
  return (
    <Link
      className={clsx(
        "text-[13px] underline text-royal-purple",
        className,
        "hover:text-royal-purple focus:outline-none focus-visible:outline-none transition-all"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
