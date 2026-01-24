import axiosInstance from "@/lib/axios";

export const getAllCourses = async (publishedOnly: boolean = false) => {
  const res = await axiosInstance.get(
    "/api/course" + (publishedOnly ? "?status=published" : ""),
  );
  return res.data;
};
