import axiosInstance from "@/lib/axios";

export async function allBatchCourses(batchId: string) {
  const result = await axiosInstance.get(
    "/api/course/get-enrollment-by-batch/" + batchId,
  );
  let dataMap = result.data.data;
  dataMap = result.data.data.map((course: any) => {
    return course.course;
  });

  return dataMap;
}
