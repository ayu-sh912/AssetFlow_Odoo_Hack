import type { ReactNode } from "react";

interface PageContainerProps {
  title: string;
  children: ReactNode;
}

export default function PageContainer({
  title,
  children,
}: PageContainerProps) {
  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold text-slate-800">
        {title}
      </h1>

      {children}
    </div>
  );
}