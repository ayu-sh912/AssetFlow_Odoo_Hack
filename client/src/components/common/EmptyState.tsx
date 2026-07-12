interface EmptyStateProps {
  title: string;
  subtitle: string;
}

export default function EmptyState({
  title,
  subtitle,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 py-16">

      <div className="mb-4 text-5xl">📦</div>

      <h2 className="text-xl font-semibold text-slate-800">
        {title}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>

    </div>
  );
}