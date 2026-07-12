import { useMemo, useState } from "react";

import PageContainer from "@/components/layout/PageContainer";
import AppCard from "@/components/ui/AppCard";
import PrimaryButton from "@/components/common/PrimaryButton";

type AssetStatus =
  | "Available"
  | "Allocated"
  | "Maintenance";

interface Asset {
  tag: string;
  name: string;
  category: string;
  department: string;
  status: AssetStatus;
}

const assetData: Asset[] = [
  {
    tag: "AST-001",
    name: "Dell Latitude 7420",
    category: "Laptop",
    department: "Engineering",
    status: "Allocated",
  },
  {
    tag: "AST-002",
    name: 'Samsung 55" Display',
    category: "Monitor",
    department: "Meeting Room",
    status: "Available",
  },
  {
    tag: "AST-003",
    name: "Canon EOS R50",
    category: "Camera",
    department: "Marketing",
    status: "Maintenance",
  },
  {
    tag: "AST-004",
    name: "MacBook Pro M3",
    category: "Laptop",
    department: "Design",
    status: "Allocated",
  },
  {
    tag: "AST-005",
    name: "HP LaserJet Pro",
    category: "Printer",
    department: "Admin",
    status: "Available",
  },
];

export default function AssetsPage() {
  const [search, setSearch] = useState("");

  const filteredAssets = useMemo(() => {
    return assetData.filter((asset) => {
      const value = search.toLowerCase();

      return (
        asset.tag.toLowerCase().includes(value) ||
        asset.name.toLowerCase().includes(value) ||
        asset.department.toLowerCase().includes(value)
      );
    });
  }, [search]);

  return (
    <PageContainer title="Asset Directory">
      <AppCard>
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Asset Tag, Name or Department..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 lg:max-w-md"
          />

          <PrimaryButton>
            + Register Asset
          </PrimaryButton>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-4">Asset Tag</th>
                <th>Name</th>
                <th>Category</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredAssets.map((asset) => (
                <tr
                  key={asset.tag}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="py-5 font-semibold">
                    {asset.tag}
                  </td>

                  <td>{asset.name}</td>

                  <td>{asset.category}</td>

                  <td>{asset.department}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        asset.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : asset.status === "Allocated"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {asset.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredAssets.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No assets found.
            </div>
          )}
        </div>
      </AppCard>
    </PageContainer>
  );
}