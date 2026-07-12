import {
  Menu,
  Bell,
  Search,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";

export default function TopNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6">

      {/* Left */}

      <div className="flex items-center gap-4">

        <button className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 transition">

          <Menu size={20} />

        </button>

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-80 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-lg border border-slate-200 p-2 hover:bg-slate-100 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="relative rounded-lg border border-slate-200 p-2 hover:bg-slate-100 transition">

          <Bell size={18} />

          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-semibold text-white">
            A
          </div>

          <div>

            <h4 className="text-sm font-semibold">
              Ayush Agrawal
            </h4>

            <p className="text-xs text-slate-500">
              Frontend Developer
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}