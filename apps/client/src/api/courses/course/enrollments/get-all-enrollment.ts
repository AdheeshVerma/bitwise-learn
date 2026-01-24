import axiosInstance from "@/lib/axios";

export async function getCourseEnrollments(
  id: string,
  courseInfo: any,
  stateFn: any,
) {
  const data = await axiosInstance.get("/api/course/enrollments/" + id);
  console.log(data);
  courseInfo(data.data.course);
  stateFn(data.data.data);
}
