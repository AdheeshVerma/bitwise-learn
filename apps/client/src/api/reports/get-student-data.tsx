import axiosInstance from "@/lib/axios";

export async function getStudentData(
  pageNumber: number,
  courseId: string,
  batchId: string,
  setStudentData: (data: any) => void,
) {
  const data = await axiosInstance.post("/api/reports/course-report/", {
    courseId,
    batchId,
    pageNumber,
  });
  console.log(data);
  setStudentData(data.data.data);

  return data.data.totalCourseTopics;
}
