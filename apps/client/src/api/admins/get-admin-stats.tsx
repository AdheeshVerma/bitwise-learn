import axiosInstance from "@/lib/axios";

export const getAllStats = async (stateFn: any) => {
  const data = await axiosInstance.post("/api/admin/get-admin-stats", {
    role: "admin",
  });
  stateFn(data.data.overview);
};
