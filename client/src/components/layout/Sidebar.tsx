import { NavLink } from "react-router-dom";
import { sidebarItems } from "@/constants/sidebar";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 border-r border-slate-800 text-white flex flex-col">
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold tracking-wide text-emerald-400">
            AssetFlow
          </h1>

          <p className="text-xs text-slate-400 text-center">
            Enterprise ERP
          </p>
        </div>
      </div>

      <div className="flex-1 p-5 space-y-2">

        {sidebarItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-500 text-white"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <Icon size={18} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="border-t border-slate-800 p-5">

        <div className="rounded-xl bg-slate-900 p-4">

          <p className="font-semibold">
            AssetFlow ERP
          </p>

          <p className="text-xs text-slate-400 mt-2">
            Odoo Hackathon 2026
          </p>

        </div>

      </div>

    </aside>
  );
}