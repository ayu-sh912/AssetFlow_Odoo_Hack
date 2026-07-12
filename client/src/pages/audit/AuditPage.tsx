import { useMemo, useState } from "react";

import AppCard from "@/components/ui/AppCard";
import PageContainer from "@/components/layout/PageContainer";
import PrimaryButton from "@/components/common/PrimaryButton";

interface Audit {
  assetTag: string;
  assetName: string;
  auditor: string;
  auditDate: string;
  result: "Verified" | "Mismatch" | "Pending";
}

const auditData: Audit[] = [
  {
    assetTag: "AST-001",
    assetName: "Dell Latitude 7420",
    auditor: "Aditi Rao",
    auditDate: "12 Jul 2026",
    result: "Verified",
  },
  {
    assetTag: "AST-002",
    assetName: 'Samsung 55" Display',
    auditor: "Rahul Mehta",
    auditDate: "11 Jul 2026",
    result: "Mismatch",
  },
  {
    assetTag: "AST-003",
    assetName: "Canon EOS R50",
    auditor: "Priya Shah",
    auditDate: "13 Jul 2026",
    result: "Pending",
  },
];

export default function AuditPage() {
  const [search, setSearch] = useState("");

  const rows = useMemo(() => {
    const q = search.toLowerCase();

    return auditData.filter(
      (item) =>
        item.assetTag.toLowerCase().includes(q) ||
        item.assetName.toLowerCase().includes(q) ||
        item.auditor.toLowerCase().includes(q)
    );
  }, [search]);

  const badge = (result: Audit["result"]) => {
    switch (result) {
      case "Verified":
        return "bg-green-100 text-green-700";
      case "Mismatch":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <PageContainer title="Audit">
      <AppCard>

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search audit..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 lg:max-w-md"
          />

          <PrimaryButton>
            + New Audit
          </PrimaryButton>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-200 text-left">

                <th className="py-4">Asset Tag</th>

                <th>Asset</th>

                <th>Auditor</th>

                <th>Date</th>

                <th>Result</th>

              </tr>

            </thead>

            <tbody>

              {rows.map((row) => (

                <tr
                  key={row.assetTag}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  <td className="py-5 font-semibold">
                    {row.assetTag}
                  </td>

                  <td>{row.assetName}</td>

                  <td>{row.auditor}</td>

                  <td>{row.auditDate}</td>

                  <td>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${badge(
                        row.result
                      )}`}
                    >
                      {row.result}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {rows.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No audit records found.
            </div>
          )}

        </div>

      </AppCard>
    </PageContainer>
  );
}