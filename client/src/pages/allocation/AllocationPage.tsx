import { useMemo, useState } from "react";

import AppCard from "@/components/ui/AppCard";
import PageContainer from "@/components/layout/PageContainer";
import PrimaryButton from "@/components/common/PrimaryButton";

interface Allocation {
  asset: string;
  employee: string;
  department: string;
  assignedDate: string;
  returnDate: string;
}

const allocationData: Allocation[] = [
  {
    asset: "Dell Latitude 7420",
    employee: "Priya Shah",
    department: "Engineering",
    assignedDate: "12 Jul 2026",
    returnDate: "30 Jul 2026",
  },
  {
    asset: "MacBook Pro M3",
    employee: "Rahul Mehta",
    department: "Design",
    assignedDate: "10 Jul 2026",
    returnDate: "25 Jul 2026",
  },
  {
    asset: "Canon EOS R50",
    employee: "Sana Iqbal",
    department: "Marketing",
    assignedDate: "09 Jul 2026",
    returnDate: "20 Jul 2026",
  },
];

export default function AllocationPage() {
  const [search, setSearch] = useState("");

  const rows = useMemo(() => {
    return allocationData.filter((item) => {
      const q = search.toLowerCase();

      return (
        item.asset.toLowerCase().includes(q) ||
        item.employee.toLowerCase().includes(q) ||
        item.department.toLowerCase().includes(q)
      );
    });
  }, [search]);

  return (
    <PageContainer title="Allocation & Transfer">
      <AppCard>

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <input
            placeholder="Search allocation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 lg:max-w-md"
          />

          <PrimaryButton>
            + Allocate Asset
          </PrimaryButton>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-200 text-left">

                <th className="py-4">Asset</th>

                <th>Employee</th>

                <th>Department</th>

                <th>Assigned</th>

                <th>Return</th>

              </tr>

            </thead>

            <tbody>

              {rows.map((item) => (

                <tr
                  key={item.asset}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  <td className="py-5 font-semibold">
                    {item.asset}
                  </td>

                  <td>{item.employee}</td>

                  <td>{item.department}</td>

                  <td>{item.assignedDate}</td>

                  <td>{item.returnDate}</td>

                </tr>

              ))}

            </tbody>

          </table>

          {rows.length === 0 && (
            <div className="py-10 text-center text-slate-500">
              No allocations found.
            </div>
          )}

        </div>

      </AppCard>
    </PageContainer>
  );
}