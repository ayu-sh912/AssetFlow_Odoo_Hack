import type { ButtonHTMLAttributes } from "react";

interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-emerald-600
        px-5
        py-2.5
        text-sm
        font-semibold
        text-white
        transition-all
        duration-200
        hover:bg-emerald-700
        active:scale-95
        disabled:opacity-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}