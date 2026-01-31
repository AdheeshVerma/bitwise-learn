import axiosInstance from "@/lib/axios";

export const getTeachersByBatch = async (statefn: any, paramId: string) => {
  const getTeachers = await axiosInstance.get(
    "/api/teacher/get-by-batch/" + paramId,
  );
  // (getTeachers.data);
  statefn(getTeachers.data);
};
