import {
  FaChartPie,
  FaBuilding,
  FaBoxOpen,
  FaExchangeAlt,
  FaCalendarAlt,
  FaTools,
  FaClipboardCheck,
  FaChartBar,
  FaBell,
} from "react-icons/fa";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: FaChartPie,
    path: "/dashboard",
  },
  {
    title: "Organization Setup",
    icon: FaBuilding,
    path: "/organization",
  },
  {
    title: "Assets",
    icon: FaBoxOpen,
    path: "/assets",
  },
  {
    title: "Allocation",
    icon: FaExchangeAlt,
    path: "/allocation",
  },
  {
    title: "Booking",
    icon: FaCalendarAlt,
    path: "/booking",
  },
  {
    title: "Maintenance",
    icon: FaTools,
    path: "/maintenance",
  },
  {
    title: "Audit",
    icon: FaClipboardCheck,
    path: "/audit",
  },
  {
    title: "Reports",
    icon: FaChartBar,
    path: "/reports",
  },
  {
    title: "Notifications",
    icon: FaBell,
    path: "/notifications",
  },
];