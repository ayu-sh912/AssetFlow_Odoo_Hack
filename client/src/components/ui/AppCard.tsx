import type { ReactNode } from "react";

interface AppCardProps {
  children: ReactNode;
  className?: string;
}

export default function AppCard({
  children,
  className = "",
}: AppCardProps) {
  return (
    <div
      className={`
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:shadow-md
      ${className}
      `}
    >
      {children}
    </div>
  );
}