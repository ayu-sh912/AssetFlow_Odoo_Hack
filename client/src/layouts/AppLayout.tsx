import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import TopNavbar from "@/components/layout/TopNavbar";

export default function AppLayout() {

    const [mobileOpen, setMobileOpen] = useState(false);

    return (

        <div className="flex h-screen bg-slate-100">

            {/* Desktop Sidebar */}

            <Sidebar />

            {/* Mobile Sidebar */}

            {mobileOpen && (

                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                >

                    <div
                        className="w-[280px] h-screen"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Sidebar />
                    </div>

                </div>

            )}

            <div className="flex flex-col flex-1">

                <TopNavbar
                    onMenuClick={() => setMobileOpen(true)}
                />

                <main className="flex-1 overflow-auto">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}