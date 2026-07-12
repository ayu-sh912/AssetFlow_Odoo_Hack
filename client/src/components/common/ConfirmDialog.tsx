interface ConfirmDialogProps {
  open: boolean;
}

export default function ConfirmDialog({
  open,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-[400px] rounded-2xl bg-white p-6">

        <h2 className="text-xl font-semibold">
          Confirm Action
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          Dialog UI will be completed in Sprint 4.
        </p>

      </div>

    </div>
  );
}