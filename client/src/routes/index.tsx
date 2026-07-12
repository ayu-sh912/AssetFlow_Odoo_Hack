import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/auth/LoginPage";
import OrganizationPage from "../pages/organization/OrganizationPage";
import AssetsPage from "../pages/assets/AssetsPage";
import AllocationPage from "../pages/allocation/AllocationPage";
import BookingPage from "../pages/booking/BookingPage";
import MaintenancePage from "../pages/maintenance/MaintenancePage";
import AuditPage from "../pages/audit/AuditPage";
import ReportsPage from "../pages/reports/ReportsPage";
import NotificationsPage from "../pages/notifications/NotificationsPage";

import AppLayout from "../layouts/AppLayout";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/login" element={<LoginPage />} />

            <Route element={<AppLayout />}>

                <Route path="/" element={<Navigate to="/dashboard" replace />} />

                <Route path="/dashboard" element={<DashboardPage />} />

                <Route path="/organization" element={<OrganizationPage />} />

                <Route path="/assets" element={<AssetsPage />} />

                <Route path="/allocation" element={<AllocationPage />} />

                <Route path="/booking" element={<BookingPage />} />

                <Route path="/maintenance" element={<MaintenancePage />} />

                <Route path="/audit" element={<AuditPage />} />

                <Route path="/reports" element={<ReportsPage />} />

                <Route
                    path="/notifications"
                    element={<NotificationsPage />}
                />

            </Route>

        </Routes>
    );
}