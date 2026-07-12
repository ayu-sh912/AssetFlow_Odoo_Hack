interface PaginationProps {
  page: number;
  totalPages: number;
}

export default function Pagination({
  page,
  totalPages,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-end gap-3">

      <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
        Previous
      </button>

      <span className="text-sm text-slate-600">
        {page} / {totalPages}
      </span>

      <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100">
        Next
      </button>

    </div>
  );
}