import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
}: SearchInputProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
        w-full
        rounded-xl
        border
        border-slate-300
        bg-white
        py-2.5
        pl-10
        pr-4
        text-sm
        outline-none
        transition
        focus:border-emerald-500
        focus:ring-2
        focus:ring-emerald-100
        "
      />
    </div>
  );
}