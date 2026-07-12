import PageContainer from "@/components/layout/PageContainer";
import AppCard from "@/components/ui/AppCard";
import StatCard from "@/components/ui/StatCard";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

const stats = [
  { title: "Available", value: 128 },
  { title: "Allocated", value: 76 },
  { title: "Reserved", value: 4 },
  { title: "Active Bookings", value: 9 },
  { title: "Pending Transfers", value: 3 },
  { title: "Upcoming Returns", value: 12 },
];

const activities = [
  {
    title: "Laptop AF-0114",
    desc: "Allocated to Priya Shah • IT Department",
    time: "2 min ago",
  },
  {
    title: "Conference Room B2",
    desc: "Booking confirmed • 2 PM - 3 PM",
    time: "18 min ago",
  },
  {
    title: "Projector AF-0062",
    desc: "Maintenance request resolved",
    time: "1 hour ago",
  },
];

export default function DashboardPage() {
  return (
    <PageContainer title="Today's Overview">
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4">
        <p className="font-semibold text-red-600">
          🚨 3 assets overdue for return — flagged for follow-up
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <PrimaryButton>
          + Register Asset
        </PrimaryButton>

        <SecondaryButton>
          Book Resource
        </SecondaryButton>

        <SecondaryButton>
          Raise Request
        </SecondaryButton>
      </div>

      <AppCard className="mt-8">
        <h2 className="mb-6 text-xl font-bold text-slate-800">
          Recent Activity
        </h2>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="flex items-start justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
            >
              <div>
                <h3 className="font-semibold text-slate-800">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {activity.desc}
                </p>
              </div>

              <span className="text-xs text-slate-400">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </AppCard>
    </PageContainer>
  );
}