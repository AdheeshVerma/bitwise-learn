import axiosInstance from "@/lib/axios";

export async function getCourseEnrollments(
  id: string,
  courseInfo: any,
  stateFn: any,
) {
  const data = await axiosInstance.get("/api/course/enrollments/" + id);
  courseInfo(data.data.course);
  stateFn(data.data.data);
}
