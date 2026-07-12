type Status =
  | "Available"
  | "Allocated"
  | "Maintenance"
  | "Reserved";

interface Props {
  status: Status;
}

const colors = {
  Available:
    "bg-green-100 text-green-700",

  Allocated:
    "bg-blue-100 text-blue-700",

  Maintenance:
    "bg-yellow-100 text-yellow-700",

  Reserved:
    "bg-red-100 text-red-700",
};

export default function StatusBadge({
  status,
}: Props) {
  return (
    <span
      className={`
      rounded-full
      px-3
      py-1
      text-xs
      font-semibold
      ${colors[status]}
      `}
    >
      {status}
    </span>
  );
}