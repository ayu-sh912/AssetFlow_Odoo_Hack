import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 overflow-auto">

        <Outlet />

      </main>

    </div>
  );
}