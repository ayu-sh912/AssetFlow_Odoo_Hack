import { useQuery } from "@tanstack/react-query";

import { DepartmentService } from "../services/department.services";

export function useDepartments() {
    return useQuery({
        queryKey: ["departments"],
        queryFn: async () => {
            const response =
                await DepartmentService.getAll();

            return response.data.data;
        },
    });
}