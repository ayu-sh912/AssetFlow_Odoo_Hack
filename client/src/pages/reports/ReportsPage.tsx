import AppCard from "@/components/ui/AppCard";
import PageContainer from "@/components/layout/PageContainer";
import PrimaryButton from "@/components/common/PrimaryButton";

const reportCards = [
  {
    title: "Asset Utilization",
    description: "View allocation and utilization trends.",
  },
  {
    title: "Maintenance Summary",
    description: "Review maintenance history and expenses.",
  },
  {
    title: "Department Assets",
    description: "Assets distributed department-wise.",
  },
  {
    title: "Audit Report",
    description: "Latest audit verification report.",
  },
  {
    title: "Booking Report",
    description: "Resource booking analytics.",
  },
  {
    title: "Inventory Summary",
    description: "Overall asset inventory overview.",
  },
];

export default function ReportsPage() {
  return (
    <PageContainer title="Reports">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {reportCards.map((report) => (

          <AppCard key={report.title}>

            <h2 className="text-xl font-semibold text-slate-800">
              {report.title}
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              {report.description}
            </p>

            <PrimaryButton className="mt-6 w-full">
              Generate Report
            </PrimaryButton>

          </AppCard>

        ))}

      </div>

    </PageContainer>
  );
}