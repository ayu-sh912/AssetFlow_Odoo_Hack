import {
  FiBell,
  FiMenu,
  FiSearch,
} from "react-icons/fi";

interface TopNavbarProps {
  onMenuClick: () => void;
}

export default function TopNavbar({
  onMenuClick,
}: TopNavbarProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

      {/* LEFT */}

      <div className="flex items-center gap-4">

        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          <FiMenu size={22} />
        </button>

        <div className="relative hidden md:block">

          <FiSearch
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            placeholder="Search assets..."
            className="w-80 rounded-xl border border-slate-300 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
          />

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-5">

        <button className="relative">

          <FiBell size={22} />

          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold">
            AA
          </div>

          <div className="hidden md:block">

            <p className="font-semibold text-sm">
              Ayush Agrawal
            </p>

            <p className="text-xs text-slate-500">
              Team Leader
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}