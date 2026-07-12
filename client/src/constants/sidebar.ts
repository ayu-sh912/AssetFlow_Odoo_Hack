import {
    LayoutDashboard,
    Building2,
    Boxes,
    ArrowRightLeft,
    CalendarDays,
    Wrench,
    ClipboardCheck,
    BarChart3,
    Bell,
} from "lucide-react";

import type { SidebarItemType } from "@/types/navigation";

export const SIDEBAR_ITEMS: SidebarItemType[] = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },

    {
        title: "Organization Setup",
        icon: Building2,
        path: "/organization",
    },

    {
        title: "Assets",
        icon: Boxes,
        path: "/assets",
    },

    {
        title: "Allocation & Transfer",
        icon: ArrowRightLeft,
        path: "/allocation",
    },

    {
        title: "Resource Booking",
        icon: CalendarDays,
        path: "/booking",
    },

    {
        title: "Maintenance",
        icon: Wrench,
        path: "/maintenance",
    },

    {
        title: "Audit",
        icon: ClipboardCheck,
        path: "/audit",
    },

    {
        title: "Reports",
        icon: BarChart3,
        path: "/reports",
    },

    {
        title: "Notifications",
        icon: Bell,
        path: "/notifications",
    },
];