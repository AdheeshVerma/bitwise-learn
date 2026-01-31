import axiosInstance from "@/lib/axios";

export const getAllInstitutions = async (stateFn: any) => {
  const data = await axiosInstance.get("/api/institution");
  stateFn(data.data);
};
