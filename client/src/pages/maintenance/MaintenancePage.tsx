import { useMemo, useState } from "react";

import AppCard from "@/components/ui/AppCard";
import PageContainer from "@/components/layout/PageContainer";
import PrimaryButton from "@/components/common/PrimaryButton";

interface Maintenance {
  asset: string;
  issue: string;
  assignedTo: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Completed";
}

const maintenanceData: Maintenance[] = [
  {
    asset: "Dell Latitude 7420",
    issue: "Keyboard Replacement",
    assignedTo: "IT Team",
    priority: "High",
    status: "In Progress",
  },
  {
    asset: "Canon EOS R50",
    issue: "Lens Calibration",
    assignedTo: "Service Center",
    priority: "Medium",
    status: "Open",
  },
  {
    asset: "HP LaserJet Pro",
    issue: "Toner Replacement",
    assignedTo: "Admin Team",
    priority: "Low",
    status: "Completed",
  },
];

export default function MaintenancePage() {
  const [search, setSearch] = useState("");

  const rows = useMemo(() => {
    return maintenanceData.filter((item) => {
      const value = search.toLowerCase();

      return (
        item.asset.toLowerCase().includes(value) ||
        item.issue.toLowerCase().includes(value) ||
        item.assignedTo.toLowerCase().includes(value)
      );
    });
  }, [search]);

  const priorityColor = (priority: Maintenance["priority"]) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  const statusColor = (status: Maintenance["status"]) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <PageContainer title="Maintenance">
      <AppCard>

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search maintenance..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 lg:max-w-md"
          />

          <PrimaryButton>
            + Raise Ticket
          </PrimaryButton>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-200 text-left">

                <th className="py-4">Asset</th>

                <th>Issue</th>

                <th>Assigned To</th>

                <th>Priority</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {rows.map((item) => (

                <tr
                  key={`${item.asset}-${item.issue}`}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  <td className="py-5 font-semibold">
                    {item.asset}
                  </td>

                  <td>{item.issue}</td>

                  <td>{item.assignedTo}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColor(
                        item.priority
                      )}`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {rows.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No maintenance records found.
            </div>
          )}

        </div>

      </AppCard>
    </PageContainer>
  );
}