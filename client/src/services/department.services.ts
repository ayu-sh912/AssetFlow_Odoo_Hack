import api from "@/lib/api";

export interface Department {
  _id?: string;
  name: string;
  code: string;
  description: string;
  isActive?: boolean;
}

export const DepartmentService = {
  getAll: async () => {
    const res = await api.get("/departments");
    return res.data;
  },

  create: async (data: Department) => {
    const res = await api.post("/departments", data);
    return res.data;
  },

  update: async (
    id: string,
    data: Partial<Department>
  ) => {
    const res = await api.put(
      `/departments/${id}`,
      data
    );
    return res.data;
  },

  delete: async (id: string) => {
    const res = await api.delete(
      `/departments/${id}`
    );
    return res.data;
  },
};