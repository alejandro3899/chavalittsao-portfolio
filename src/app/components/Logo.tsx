import clsx from "clsx";
import Link from "next/link";

export default function Logo({
  text,
  theme = "default",
}: {
  text: string;
  theme?: "light" | "default";
}) {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className={clsx(
          "font-sans text-xl",
          theme === "light" ? "text-white" : "text-royal-purple"
        )}
      >
        {text}
      </Link>
    </div>
  );
}
