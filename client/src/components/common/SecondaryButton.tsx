import type { ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SecondaryButton({
  children,
  className = "",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        border
        border-slate-300
        bg-white
        px-5
        py-2.5
        text-sm
        font-semibold
        text-slate-700
        transition
        hover:bg-slate-100
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}