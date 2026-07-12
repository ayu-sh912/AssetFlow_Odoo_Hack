import { useMemo, useState } from "react";

import AppCard from "@/components/ui/AppCard";
import PageContainer from "@/components/layout/PageContainer";
import PrimaryButton from "@/components/common/PrimaryButton";

interface Booking {
  resource: string;
  bookedBy: string;
  date: string;
  time: string;
  status: "Approved" | "Pending";
}

const bookingData: Booking[] = [
  {
    resource: "Conference Room A",
    bookedBy: "Priya Shah",
    date: "12 Jul 2026",
    time: "10:00 AM - 11:00 AM",
    status: "Approved",
  },
  {
    resource: "Projector PX-02",
    bookedBy: "Rahul Mehta",
    date: "12 Jul 2026",
    time: "2:00 PM - 4:00 PM",
    status: "Pending",
  },
  {
    resource: "Meeting Room B",
    bookedBy: "Aditi Rao",
    date: "13 Jul 2026",
    time: "11:00 AM - 12:00 PM",
    status: "Approved",
  },
];

export default function BookingPage() {
  const [search, setSearch] = useState("");

  const rows = useMemo(() => {
    return bookingData.filter((item) => {
      const value = search.toLowerCase();

      return (
        item.resource.toLowerCase().includes(value) ||
        item.bookedBy.toLowerCase().includes(value)
      );
    });
  }, [search]);

  return (
    <PageContainer title="Resource Booking">
      <AppCard>

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search booking..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 lg:max-w-md"
          />

          <PrimaryButton>
            + New Booking
          </PrimaryButton>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-200 text-left">

                <th className="py-4">Resource</th>

                <th>Booked By</th>

                <th>Date</th>

                <th>Time</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {rows.map((booking) => (

                <tr
                  key={`${booking.resource}-${booking.date}-${booking.time}`}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  <td className="py-5 font-semibold">
                    {booking.resource}
                  </td>

                  <td>{booking.bookedBy}</td>

                  <td>{booking.date}</td>

                  <td>{booking.time}</td>

                  <td>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        booking.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {rows.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No bookings found.
            </div>
          )}

        </div>

      </AppCard>
    </PageContainer>
  );
}