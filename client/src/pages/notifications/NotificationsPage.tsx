import { useMemo, useState } from "react";

import AppCard from "@/components/ui/AppCard";
import PageContainer from "@/components/layout/PageContainer";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  priority: "High" | "Medium" | "Low";
  read: boolean;
}

const notificationData: Notification[] = [
  {
    id: 1,
    title: "Asset Return Due",
    message: "Dell Latitude 7420 is due for return tomorrow.",
    time: "10 mins ago",
    priority: "High",
    read: false,
  },
  {
    id: 2,
    title: "Maintenance Completed",
    message: "Canon EOS R50 maintenance has been completed.",
    time: "1 hour ago",
    priority: "Medium",
    read: true,
  },
  {
    id: 3,
    title: "New Booking",
    message: "Conference Room A booked by Rahul Mehta.",
    time: "3 hours ago",
    priority: "Low",
    read: true,
  },
];

export default function NotificationsPage() {
  const [search, setSearch] = useState("");

  const rows = useMemo(() => {
    const q = search.toLowerCase();

    return notificationData.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.message.toLowerCase().includes(q)
    );
  }, [search]);

  const badge = (priority: Notification["priority"]) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <PageContainer title="Notifications">
      <AppCard>

        <div className="mb-6">

          <input
            placeholder="Search notifications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600"
          />

        </div>

        <div className="space-y-4">

          {rows.map((notification) => (

            <div
              key={notification.id}
              className={`rounded-xl border p-5 transition ${
                notification.read
                  ? "border-slate-200 bg-white"
                  : "border-emerald-300 bg-emerald-50"
              }`}
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-slate-800">
                  {notification.title}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${badge(
                    notification.priority
                  )}`}
                >
                  {notification.priority}
                </span>

              </div>

              <p className="mt-3 text-sm text-slate-500">
                {notification.message}
              </p>

              <p className="mt-4 text-xs text-slate-400">
                {notification.time}
              </p>

            </div>

          ))}

          {rows.length === 0 && (
            <div className="py-10 text-center text-slate-500">
              No notifications found.
            </div>
          )}

        </div>

      </AppCard>
    </PageContainer>
  );
}