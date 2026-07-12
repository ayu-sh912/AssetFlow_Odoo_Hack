import { NavLink } from "react-router-dom";

import type { SidebarItemType } from "@/types/navigation";

interface SidebarItemProps {
    item: SidebarItemType;
}

export default function SidebarItem({
    item,
}: SidebarItemProps) {
    const Icon = item.icon;

    return (
        <NavLink
            to={item.path}
            className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
                ${
                    isActive
                        ? "bg-emerald-500 text-white shadow-lg"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
            }
        >
            <Icon
                size={19}
                strokeWidth={2}
            />

            <span className="text-sm font-medium">
                {item.title}
            </span>
        </NavLink>
    );
}