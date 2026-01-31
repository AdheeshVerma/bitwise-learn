import axiosInstance from "@/lib/axios";

export const deleteCourseById = async (courseId: string) => {
  const res = await axiosInstance.delete(
    `/api/course/delete-course/${courseId}`,
  );
  return res.data;
};
