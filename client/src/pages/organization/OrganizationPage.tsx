import { useState } from "react";
import {
    FiEdit2,
    FiTrash2,
    FiPlus,
    FiRefreshCw,
} from "react-icons/fi";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import PageContainer from "@/components/layout/PageContainer";
import AppCard from "@/components/ui/AppCard";
import PrimaryButton from "@/components/common/PrimaryButton";
import Modal from "@/components/ui/Modal";

import { useDepartments } from "@/hooks/useDepartments";
import { DepartmentService } from "@/services/department.services";

const tabs = [
    "Departments",
    "Categories",
    "Employees",
];

export default function OrganizationPage() {
    const [activeTab, setActiveTab] =
        useState("Departments");

    const queryClient =
        useQueryClient();

    const [open, setOpen] =
        useState(false);

    const [form, setForm] =
        useState({
            name: "",
            code: "",
            description: "",
        });

    const {
        data: departments = [],
        isLoading,
        refetch,
    } = useDepartments();

    const createDepartment =
        useMutation({
            mutationFn:
                DepartmentService.create,

            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: [
                        "departments",
                    ],
                });

                setOpen(false);

                setForm({
                    name: "",
                    code: "",
                    description: "",
                });
            },
        });

    return (
        <PageContainer title="Organization Setup">
            <AppCard>

                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

                    <div className="flex flex-wrap gap-3">

                        {tabs.map((tab) => (

                            <button
                                key={tab}
                                onClick={() =>
                                    setActiveTab(tab)
                                }
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

                    <div className="flex gap-3">

                        <button
                            onClick={() =>
                                refetch()
                            }
                            className="rounded-xl border border-slate-300 p-3 hover:bg-slate-100"
                        >
                            <FiRefreshCw />
                        </button>

                        <PrimaryButton
                            onClick={() =>
                                setOpen(true)
                            }
                        >
                            <FiPlus className="mr-2" />

                            Add Department
                        </PrimaryButton>

                    </div>

                </div>

                {activeTab ===
                    "Departments" && (

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr className="border-b border-slate-200">

                                    <th className="py-4 text-left">
                                        Department
                                    </th>

                                    <th className="text-left">
                                        Code
                                    </th>

                                    <th className="text-left">
                                        Description
                                    </th>

                                    <th className="text-left">
                                        Status
                                    </th>

                                    <th className="text-right">
                                        Actions
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {isLoading && (

                                    <tr>

                                        <td
                                            colSpan={5}
                                            className="py-10 text-center"
                                        >
                                            Loading...
                                        </td>

                                    </tr>

                                )}

                                {!isLoading &&
                                    departments.length ===
                                        0 && (

                                        <tr>

                                            <td
                                                colSpan={5}
                                                className="py-10 text-center text-slate-500"
                                            >
                                                No departments found.
                                            </td>

                                        </tr>

                                    )}
                                {departments.map(
                                    (department: any) => (
                                        <tr
                                            key={
                                                department._id
                                            }
                                            className="border-b border-slate-100 hover:bg-slate-50"
                                        >
                                            <td className="py-5 font-medium">
                                                {
                                                    department.name
                                                }
                                            </td>

                                            <td>
                                                {
                                                    department.code
                                                }
                                            </td>

                                            <td>
                                                {department.description ||
                                                    "-"}
                                            </td>

                                            <td>
                                                <span
                                                    className={`rounded-full px-4 py-1 text-xs font-semibold ${
                                                        department.isActive
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-red-100 text-red-700"
                                                    }`}
                                                >
                                                    {department.isActive
                                                        ? "Active"
                                                        : "Inactive"}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="flex justify-end gap-2">

                                                    <button className="rounded-lg p-2 text-blue-600 hover:bg-blue-50">
                                                        <FiEdit2 />
                                                    </button>

                                                    <button className="rounded-lg p-2 text-red-600 hover:bg-red-50">
                                                        <FiTrash2 />
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                )}

                {activeTab === "Categories" && (
                    <div className="py-20 text-center text-slate-500">
                        Categories Module Coming Next
                    </div>
                )}

                {activeTab === "Employees" && (
                    <div className="py-20 text-center text-slate-500">
                        Employee Module Coming Next
                    </div>
                )}

                <Modal
                    open={open}
                    title="Add Department"
                    onClose={() =>
                        setOpen(false)
                    }
                >
                    <form
                        className="space-y-5"
                        onSubmit={(e) => {
                            e.preventDefault();

                            createDepartment.mutate(
                                form
                            );
                        }}
                    >

                        <div>

                            <label className="mb-2 block text-sm font-medium">
                                Department Name
                            </label>

                            <input
                                required
                                value={form.name}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-emerald-600"
                            />

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-medium">
                                Department Code
                            </label>

                            <input
                                required
                                value={form.code}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        code: e.target.value.toUpperCase(),
                                    })
                                }
                                className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-emerald-600"
                            />

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-medium">
                                Description
                            </label>

                            <textarea
                                rows={3}
                                value={
                                    form.description
                                }
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        description:
                                            e.target
                                                .value,
                                    })
                                }
                                className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-emerald-600"
                            />

                        </div>

                        <div className="flex justify-end gap-3">

                            <button
                                type="button"
                                onClick={() =>
                                    setOpen(false)
                                }
                                className="rounded-xl border border-slate-300 px-5 py-2 hover:bg-slate-100"
                            >
                                Cancel
                            </button>

                            <PrimaryButton
                                type="submit"
                                disabled={
                                    createDepartment.isPending
                                }
                            >
                                {createDepartment.isPending
                                    ? "Creating..."
                                    : "Create Department"}
                            </PrimaryButton>

                        </div>

                    </form>

                </Modal>

            </AppCard>

        </PageContainer>
    );
}