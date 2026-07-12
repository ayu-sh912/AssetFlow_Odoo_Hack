import { useEffect, useRef, useState } from "react";
import {
  FiBell,
  FiChevronDown,
  FiLogOut,
  FiMenu,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface TopNavbarProps {
  onMenuClick: () => void;
}

interface User {
  name: string;
  email: string;
  role: string;
}

export default function TopNavbar({
  onMenuClick,
}: TopNavbarProps) {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    function close(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          e.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    window.addEventListener("click", close);

    return () =>
      window.removeEventListener(
        "click",
        close
      );
  }, []);

  function logout() {
    localStorage.removeItem("accessToken");

    localStorage.removeItem("user");

    navigate("/login");
  }

  const initials =
    user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "AA";

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">

      {/* LEFT */}

      <div className="flex items-center gap-4">

        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
        >
          <FiMenu size={22} />
        </button>

        <div className="relative hidden md:block">

          <FiSearch className="absolute left-3 top-3 text-slate-400" />

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

          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            3
          </span>

        </button>

        <div
          ref={menuRef}
          className="relative"
        >

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-slate-100"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">

              {initials}

            </div>

            <div className="hidden text-left md:block">

              <p className="font-semibold text-sm">

                {user?.name || "Guest"}

              </p>

              <p className="text-xs text-slate-500">

                {user?.role || "Employee"}

              </p>

            </div>

            <FiChevronDown />

          </button>

          {open && (

            <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">

              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100">

                <FiUser />

                My Profile

              </button>

              <button
                onClick={logout}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 hover:bg-red-50"
              >

                <FiLogOut />

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}