import axiosInstance from "@/lib/axios";

export const getAllStudents = async (statefn: any) => {
  const getAllStudents = await axiosInstance.get("/api/student/");
  statefn(getAllStudents.data);
};
