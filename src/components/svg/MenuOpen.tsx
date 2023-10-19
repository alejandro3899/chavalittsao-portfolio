import React from "react";

const MenuOpen = ({ className }: { className?: string }) => {
  return (
    <svg
      width="36"
      height="6"
      viewBox="0 0 36 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="36" height="1" fill="currentColor" />
      <rect y="5" width="36" height="1" fill="currentColor" />
    </svg>
  );
};

export default MenuOpen;
