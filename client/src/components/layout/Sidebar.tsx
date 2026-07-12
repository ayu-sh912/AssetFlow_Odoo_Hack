import { SIDEBAR_ITEMS } from "@/constants/sidebar";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
    return (
        <aside
            className="
            flex
            w-[280px] lg:w-[280px]
            fixed lg:relative h-screen z-50
            bg-slate-950
            text-white
            border-r
            border-slate-800
            flex-col
            lg:translate-x-0
            "
        >
            <div
                className="
                h-20
                flex
                items-center
                px-8
                border-b
                border-slate-800
                "
            >
                <div>

                    <h1
                        className="
                        text-3xl
                        font-bold
                        tracking-wide
                        text-emerald-400
                        "
                    >
                        AssetFlow
                    </h1>

                    <p
                        className="
                        text-xs
                        text-slate-400
                        mt-1
                        "
                    >
                        Enterprise Asset Management
                    </p>

                </div>
            </div>

            <div
                className="
                flex-1
                overflow-y-auto
                px-4
                py-6
                space-y-2
                "
            >
                {SIDEBAR_ITEMS.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                    />
                ))}
            </div>

            <div
                className="
                border-t
                border-slate-800
                p-6
                "
            >
                <div
                    className="
                    rounded-2xl
                    bg-slate-900
                    p-4
                    "
                >
                    <p
                        className="
                        text-sm
                        font-semibold
                        "
                    >
                        Odoo Hackathon
                    </p>

                    <p
                        className="
                        text-xs
                        text-slate-400
                        mt-2
                        "
                    >
                        AssetFlow ERP v1.0
                    </p>
                </div>
            </div>
        </aside>
    );
}