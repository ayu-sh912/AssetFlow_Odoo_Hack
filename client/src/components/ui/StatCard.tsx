interface StatCardProps {
  title: string;
  value: string | number;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div
      className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
      "
    >
      <p
        className="
        text-sm
        font-medium
        text-slate-500
        "
      >
        {title}
      </p>

      <h2
        className="
        mt-4
        text-4xl
        font-bold
        text-slate-900
        "
      >
        {value}
      </h2>
    </div>
  );
}