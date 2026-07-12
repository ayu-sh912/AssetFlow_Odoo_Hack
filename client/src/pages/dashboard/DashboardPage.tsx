import PageContainer from "@/components/layout/PageContainer";

export default function DashboardPage() {
  return (
    <PageContainer title="Dashboard">

      <div className="grid grid-cols-4 gap-6">

        {[1, 2, 3, 4].map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">
              KPI Card {item}
            </h3>

            <p className="mt-4 text-3xl font-bold">
              0
            </p>
          </div>

        ))}

      </div>

    </PageContainer>
  );
}