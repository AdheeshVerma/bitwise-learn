import axiosInstance from "@/lib/axios";

export const getAllTeachers = async (statefn: any) => {
  const getAllTeachers = await axiosInstance.get("/api/teacher/");
  statefn(getAllTeachers.data);
};
