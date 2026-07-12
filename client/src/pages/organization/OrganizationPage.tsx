import { useState } from "react";

import PageContainer from "@/components/layout/PageContainer";
import AppCard from "@/components/ui/AppCard";
import PrimaryButton from "@/components/common/PrimaryButton";

const tabs = [
  "Departments",
  "Categories",
  "Employees",
];

const departments = [
  {
    department: "Engineering",
    head: "Aditi Rao",
    parent: "--",
    status: "Active",
  },
  {
    department: "Facilities",
    head: "Rohan Mehta",
    parent: "--",
    status: "Active",
  },
  {
    department: "Field Ops (East)",
    head: "Sana Iqbal",
    parent: "Field Ops",
    status: "Inactive",
  },
];

export default function OrganizationPage() {
  const [activeTab, setActiveTab] =
    useState("Departments");

  return (
    <PageContainer title="Organization Setup">
      <AppCard>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-xl border px-5 py-2 text-sm font-medium transition ${
                  activeTab === tab
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-300 bg-white hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <PrimaryButton>
            + Add
          </PrimaryButton>
        </div>

        {activeTab === "Departments" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="py-4">Department</th>
                  <th>Head</th>
                  <th>Parent Dept</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {departments.map((item) => (
                  <tr
                    key={item.department}
                    className="border-b border-slate-100 hover:bg-slate-50"
                  >
                    <td className="py-5 font-medium">
                      {item.department}
                    </td>

                    <td>{item.head}</td>

                    <td>{item.parent}</td>

                    <td>
                      <span
                        className={`rounded-full px-4 py-1 text-xs font-semibold ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
              Editing a department here also drives the picklist
              in Allocation & Transfer and Resource Booking.
            </div>
          </div>
        )}

        {activeTab === "Categories" && (
          <div className="py-16 text-center text-slate-500">
            Categories module coming next.
          </div>
        )}

        {activeTab === "Employees" && (
          <div className="py-16 text-center text-slate-500">
            Employee module coming next.
          </div>
        )}
      </AppCard>
    </PageContainer>
  );
}